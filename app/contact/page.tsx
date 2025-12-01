import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import {
  Mail,
  MapPin,
  MessageSquare,
  Building2,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com GeoJogos para projetos de jogos educacionais personalizados, parcerias com escolas ou colaboração em pesquisa.",
};

const contactReasons = [
  {
    icon: Building2,
    title: "Projetos Personalizados",
    description:
      "Interessado em desenvolver um jogo educacional personalizado para sua escola ou instituição.",
  },
  {
    icon: GraduationCap,
    title: "Parcerias com Escolas",
    description:
      "Explore oportunidades de parceria para implementação de jogos educacionais.",
  },
  {
    icon: MessageSquare,
    title: "Colaboração em Pesquisa",
    description:
      "Colabore em pesquisa acadêmica relacionada à aprendizagem baseada em jogos em Geografia.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Tem um projeto em mente? Quer saber mais sobre nossos jogos
            educacionais? Gostaríamos de ouvir você. Vamos discutir como podemos
            ajudar a transformar a educação em Geografia em sua escola.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Informações de Contato
              </h2>
              <p className="mt-2 text-muted-foreground">
                Entre em contato através do formulário ou nos contacte
                diretamente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    contact@geojogos.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Brasil</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Como Podemos Ajudar?
              </h3>
              {contactReasons.map((reason) => (
                <Card key={reason.title} className="bg-muted/50">
                  <CardContent className="flex gap-4 p-4">
                    <reason.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Envie-nos uma Mensagem
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
