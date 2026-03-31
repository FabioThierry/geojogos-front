import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getGameBySlug, generateGameStaticParams } from "@/lib/data-access";
import { StructuredData } from "@/components/ui/structured-data";
import { getGameSchema, getWebPageSchema } from "@/lib/schemas";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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

  const gameSchema = getGameSchema(
    game.title,
    game.shortDescription,
    game.coverImage || "",
    4.8,
    0,
  );

  const gamePageSchema = getWebPageSchema(
    game.title,
    game.shortDescription,
    `https://geojogos.com/games/${slug}`,
    [
      { name: "Home", url: "https://geojogos.com" },
      { name: "Jogos", url: "https://geojogos.com/games" },
      { name: game.title, url: `https://geojogos.com/games/${slug}` },
    ],
  );

  return (
    <div className="">
      <StructuredData schema={gameSchema} />
      <StructuredData schema={gamePageSchema} />
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-muted-foreground hover:text-primary max-w-full overflow-hidden"
        >
          <Link href="/games" className="truncate">
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Voltar para Jogos
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-4 sm:gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Cover Image */}
          <div className="relative w-full overflow-hidden rounded-2xl aspect-4/3">
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              className="object-cover object-center"
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
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl wrap-break-words">
              {game.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground wrap-break-words">
              {game.shortDescription}
            </p>

            {/* Quick Info Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="bg-muted/50">
                <CardContent className="flex items-center gap-3 p-4 min-w-0">
                  <Users className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Nível Alvo</p>
                    <p className="font-medium text-foreground wrap-break-words">
                      {game.targetLevel}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="flex items-center gap-3 p-4 min-w-0">
                  {game.type === "Digital" ? (
                    <Monitor className="h-5 w-5 text-primary shrink-0" />
                  ) : (
                    <Puzzle className="h-5 w-5 text-primary shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Formato</p>
                    <p className="font-medium text-foreground wrap-break-words">
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
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground sm:w-auto max-w-full overflow-hidden"
              >
                <Link href="/custom-projects" className="truncate">
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
          <h2 className="text-2xl font-bold text-foreground wrap-break-words">
            Sobre este Jogo
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed wrap-break-words">
            {game.fullDescription}
          </p>
        </div>
      </section>

      {/* Educational Objectives & Skills */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Educational Objectives */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground wrap-break-words">
                Objetivos Educacionais
              </h2>
            </div>
            <ul className="space-y-3">
              {game.educationalObjectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground min-w-0"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-muted text-xs font-medium text-primary">
                    {index + 1}
                  </span>
                  <span className="wrap-break-words">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Developed */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground wrap-break-words">
                Habilidades Desenvolvidas
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {game.skillsDeveloped.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-primary text-primary px-3 py-1 wrap-break-words max-w-full"
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
          <div className="flex items-center gap-3 mb-6 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground  wrap-break-words">
              Como os Professores Podem Usar
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl wrap-break-words">
            {game.howToUse}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-foreground wrap-break-words">
          Quer Este Jogo Personalizado para Sua Escola?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground wrap-break-words">
          Podemos adaptar este jogo para seu currículo específico, geografia
          local e objetivos educacionais.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground max-w-full overflow-hidden"
        >
          <Link href="/custom-projects" className="truncate">
            Solicitar uma Versão Personalizada
          </Link>
        </Button>
      </section>
    </div>
  );
}
