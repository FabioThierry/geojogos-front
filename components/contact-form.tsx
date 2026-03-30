"use client";

import type React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle } from "lucide-react";

// Zod schema for client-side validation
const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  subject: z
    .string()
    .min(1, "Assunto é obrigatório")
    .max(200, "Assunto muito longo"),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!recaptchaToken) {
      setError("Por favor, complete a verificação reCAPTCHA.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setRecaptchaToken(null);
      } else {
        setError(result.error || "Erro ao enviar mensagem.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-muted">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Mensagem Enviada!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Obrigado por nos contatar. Retornaremos em breve.
        </p>
        <Button
          variant="outline"
          className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar Outra Mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="flex items-center space-x-2 rounded-md bg-destructive/10 p-4 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Seu nome"
            className="border-border focus:border-primary focus:ring-primary"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="seu@email.com"
            className="border-border focus:border-primary focus:ring-primary"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Assunto</Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="Como podemos ajudar?"
          className="border-border focus:border-primary focus:ring-primary"
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Conte-nos sobre seu projeto ou pergunta..."
          rows={6}
          className="border-border focus:border-primary focus:ring-primary resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={onRecaptchaChange}
        />
        {!recaptchaToken && (
          <p className="text-sm text-muted-foreground">
            Complete a verificação para enviar a mensagem.
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
        disabled={isLoading || !recaptchaToken}
      >
        {isLoading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
