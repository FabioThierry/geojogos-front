import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  BookOpen,
  MapPin,
  Users,
  Target,
  Monitor,
  Puzzle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { IconRenderer } from "@/components/ui/icon-renderer";
import customProjectsData from "@/lib/data/pages/customProjects";

export const metadata: Metadata = {
  title: customProjectsData.metadata.title,
  description: customProjectsData.metadata.description,
};

export default function CustomProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                {customProjectsData.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {customProjectsData.hero.subtitle}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                <Link href="/contact">{customProjectsData.hero.cta}</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src={customProjectsData.hero.image}
                alt={customProjectsData.hero.imageAlt}
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Adapt */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Personalizado para Suas Necessidades"
          subtitle="Adaptamos cada aspecto do jogo para se adequar ao seu contexto educacional"
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customProjectsData.adaptations.map((item) => {
            return (
              <Card
                key={item.title}
                className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <IconRenderer
                      name={item.iconKey}
                      className="h-7 w-7 text-primary-foreground"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Formats */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Formatos Digital e Analógico"
            subtitle="Escolha o formato que melhor funciona para sua sala de aula"
            centered
          />
          <div className="grid gap-8 md:grid-cols-2">
            {customProjectsData.formats.map((format) => {
              return (
                <Card key={format.title} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary p-6 text-primary-foreground">
                      <div className="flex items-center gap-3">
                        <IconRenderer
                          name={format.iconKey}
                          className="h-8 w-8"
                        />
                        <h3 className="text-xl font-semibold">
                          {format.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="p-6 space-y-3">
                      {format.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Como Funciona"
          subtitle="Nosso processo colaborativo de desenvolvimento"
          centered
        />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2" />
          <div className="space-y-8">
            {customProjectsData.process.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:block lg:w-1/2" />
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:px-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-primary-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Aplicações de Exemplo"
            subtitle="Ideias para projetos de jogos personalizados"
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {customProjectsData.examples.map((example) => (
              <Card
                key={example.title}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {example.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            {customProjectsData.cta.title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {customProjectsData.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-background text-primary hover:bg-background/90"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              {customProjectsData.cta.link} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
