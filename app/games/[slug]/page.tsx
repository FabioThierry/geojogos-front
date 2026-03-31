import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getGameBySlug, generateGameStaticParams } from "@/lib/data-access";
import {
  Target,
  Users,
  Monitor,
  Puzzle,
  BookOpen,
  Brain,
  ArrowLeft,
} from "lucide-react";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return await generateGameStaticParams();
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGameBySlug(slug);

  if (!game) {
    return {
      title: "Jogo Não Encontrado",
    };
  }

  return {
    title: game.title,
    description: game.shortDescription,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = await getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div>
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-muted-foreground hover:text-primary"
        >
          <Link href="/games">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Jogos
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Cover Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={game.coverImage || "/placeholder.svg"}
              alt={game.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge
                className={
                  game.type === "Digital"
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground text-background"
                }
              >
                {game.type === "Digital" ? "Digital" : "Jogo de Tabuleiro"}
              </Badge>
              <Badge
                variant="outline"
                className="bg-background/90 text-foreground"
              >
                {game.category === "Geografia"
                  ? "Geografia"
                  : "Interdisciplinar"}
              </Badge>
            </div>
          </div>

          {/* Game Info */}
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              {game.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {game.shortDescription}
            </p>

            {/* Quick Info Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="bg-muted/50">
                <CardContent className="flex items-center gap-3 p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Nível Alvo</p>
                    <p className="font-medium text-foreground">
                      {game.targetLevel}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="flex items-center gap-3 p-4">
                  {game.type === "Digital" ? (
                    <Monitor className="h-5 w-5 text-primary" />
                  ) : (
                    <Puzzle className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="text-xs text-muted-foreground">Formato</p>
                    <p className="font-medium text-foreground">
                      {game.type === "Digital"
                        ? "Digital"
                        : "Jogo de Tabuleiro"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground sm:w-auto"
              >
                <Link href="/custom-projects">
                  Solicitar uma Versão Personalizada deste Jogo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Sobre este Jogo
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {game.fullDescription}
          </p>
        </div>
      </section>

      {/* Educational Objectives & Skills */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Educational Objectives */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Objetivos Educacionais
              </h2>
            </div>
            <ul className="space-y-3">
              {game.educationalObjectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-muted text-xs font-medium text-primary">
                    {index + 1}
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Developed */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Habilidades Desenvolvidas
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {game.skillsDeveloped.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-primary text-primary px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Teachers Can Use It */}
      <section className="bg-primary-muted py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Como os Professores Podem Usar
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            {game.howToUse}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-foreground">
          Quer Este Jogo Personalizado para Sua Escola?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Podemos adaptar este jogo para seu currículo específico, geografia
          local e objetivos educacionais.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          <Link href="/custom-projects">
            Solicitar uma Versão Personalizada
          </Link>
        </Button>
      </section>
    </div>
  );
}
