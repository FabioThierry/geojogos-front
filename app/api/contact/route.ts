import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { Resend } from 'resend';

// Initialize DOMPurify with JSDOM
const window = new JSDOM('').window;
const DOMPurifyServer = DOMPurify(window);

// Zod schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'Assunto é obrigatório').max(200, 'Assunto muito longo'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(2000, 'Mensagem muito longa'),
  recaptchaToken: z.string().min(1, 'Verificação reCAPTCHA é obrigatória'),
});

// Rate limiting: simple in-memory store (in production, use Redis or similar)
const submissions = new Map<string, number[]>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3; // max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];

  // Remove old submissions outside the window
  const recentSubmissions = userSubmissions.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return true;
  }

  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  return false;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY not set');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

function sanitizeInput(input: string): string {
  // Sanitize HTML and trim
  return DOMPurifyServer.sanitize(input).trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message, recaptchaToken } = validationResult.data;

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Tente novamente mais tarde.' },
        { status: 429 }
      );
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'Verificação reCAPTCHA falhou.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailResult = await resend.emails.send({
      from: 'contact@yourdomain.com', // Replace with your verified domain
      to: 'your-email@example.com', // Replace with your email
      subject: `Contato: ${sanitizedSubject}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${sanitizedSubject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Falha ao enviar email. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}