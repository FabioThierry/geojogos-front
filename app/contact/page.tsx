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
import { IconRenderer } from "@/components/ui/icon-renderer";
import contactData from "@/lib/data/pages/contact";

export const metadata: Metadata = {
  title: contactData.metadata.title,
  description: contactData.metadata.description,
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
  const titleParts = contactData.hero.title.split(" ");
  const lastWord = titleParts.pop();

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {titleParts.join(" ")}{" "}
            <span className="text-primary">{lastWord}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {contactData.hero.subtitle}
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
                {contactData.info.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {contactData.info.lead}
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
                    {contactData.info.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">
                    {contactData.info.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Como Podemos Ajudar?
              </h3>
              {contactData.reasons.map((reason) => {
                return (
                  <Card key={reason.title} className="bg-muted/50">
                    <CardContent className="flex gap-4 p-4">
                      <IconRenderer
                        name={reason.iconKey}
                        className="h-5 w-5 shrink-0 text-primary"
                      />
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
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {contactData.form.title}
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
