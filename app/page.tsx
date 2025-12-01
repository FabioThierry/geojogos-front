import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { GameCard } from "@/components/ui/game-card";
import { getFeaturedGames } from "@/lib/data/games";
import {
  Gamepad2,
  Puzzle,
  Sparkles,
  GraduationCap,
  Target,
  BookOpen,
  Brain,
  Globe,
  Lightbulb,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Jogos Educacionais Digitais Personalizados",
    description:
      "Experiências digitais interativas adaptadas ao seu currículo e às necessidades dos alunos.",
  },
  {
    icon: Puzzle,
    title: "Jogos de Tabuleiro Educacionais",
    description:
      "Experiências de aprendizagem tátil que promovem a colaboração e o pensamento espacial.",
  },
  {
    icon: Sparkles,
    title: "Experiências de Aprendizagem Gamificadas",
    description:
      "Transforme lições tradicionais em atividades envolventes baseadas em jogos.",
  },
  {
    icon: GraduationCap,
    title: "Ferramentas para Professores",
    description:
      "Recursos e guias para ajudar educadores a implementar efetivamente a aprendizagem baseada em jogos.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Engajamento",
    description:
      "Os jogos capturam a atenção e motivam os alunos a participar ativamente da aprendizagem.",
  },
  {
    icon: BookOpen,
    title: "Aprendizagem Significativa",
    description:
      "A mecânica dos jogos reforça conceitos por meio da prática, feedback e progressão.",
  },
  {
    icon: Globe,
    title: "Raciocínio Cartográfico",
    description:
      "Mapas interativos e desafios espaciais desenvolvem habilidades essenciais de leitura de mapas.",
  },
  {
    icon: Brain,
    title: "Pensamento Espacial",
    description:
      "Os jogos desenvolvem naturalmente a capacidade de visualizar e raciocinar sobre o espaço.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizagem Interdisciplinar",
    description:
      "Os jogos de geografia conectam naturalmente história, ciências, economia e mais.",
  },
];

const partners = [
  { name: "Escola Parceira 1", logo: "/school-logo-educational.jpg" },
  { name: "Escola Parceira 2", logo: "/university-logo-academic.jpg" },
  {
    name: "Escola Parceira 3",
    logo: "/placeholder.svg?height=60&width=120&text=Partner",
  },
  {
    name: "Escola Parceira 4",
    logo: "/placeholder.svg?height=60&width=120&text=Institution",
  },
];

export default function HomePage() {
  const featuredGames = getFeaturedGames();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-muted via-background to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-xl border-4 border-primary rotate-12" />
          <div className="absolute top-40 right-20 h-24 w-24 rounded-xl border-4 border-primary -rotate-6" />
          <div className="absolute bottom-20 left-1/4 h-20 w-20 rounded-xl border-4 border-primary rotate-45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Jogos Educacionais Criados para{" "}
                <span className="text-primary">Salas de Aula Reais</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Criamos jogos digitais e analógicos personalizados para
                transformar o ensino de Geografia nas escolas. Desenvolvidos por
                educadores, para educadores.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <Link href="/games">Ver Jogos</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/custom-projects">
                    Solicitar um Projeto Personalizado
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <Image
                  src="/images/geojogos-20-283-29.png"
                  alt="GeoJogos - Jogos Educacionais"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GeoJogos */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="O que é o GeoJogos?"
              subtitle="Um estúdio de jogos educacionais dedicado a transformar a forma como a Geografia é ensinada e aprendida nas escolas de todo o Brasil."
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                O GeoJogos foi fundado com a crença de que aprender deve ser
                envolvente, significativo e acessível. Nós combinamos expertise
                pedagógica com princípios de design de jogos para criar
                experiências educacionais que realmente funcionam.
              </p>
              <p>
                Nossa equipe trabalha diretamente com professores e escolas para
                desenvolver jogos que abordam desafios reais da sala de aula.
                Cada jogo que criamos é fundamentado em pesquisa educacional e
                adaptado às necessidades curriculares específicas.
              </p>
              <p>
                Seja digital ou analógico, nossos jogos são projetados para
                desenvolver o pensamento espacial, o raciocínio cartográfico e a
                literacia geográfica, mantendo os alunos engajados e motivados a
                aprender.
              </p>
            </div>
            <Button
              asChild
              className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <Link href="/about">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/classroom-students-playing-educational-game-geogra.jpg"
              alt="Alunos jogando jogos educacionais"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="O que criamos"
            subtitle="De simulações digitais a jogos de tabuleiro táteis, desenvolvemos ferramentas educacionais que trazem a Geografia à vida."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Games in Geography Education */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Por que usar jogos na educação em Geografia?"
          subtitle="Pesquisas mostram que a aprendizagem baseada em jogos melhora significativamente o engajamento e a retenção do conhecimento pelos alunos."
          centered
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-muted"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Jogos em Destaque"
            subtitle="Explore nossa coleção de jogos educacionais projetados para salas de aula de Geografia."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGames.slice(0, 3).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/games">Ver Todos os Jogos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Parcerias Institucionais"
          subtitle="Trabalhamos com escolas, universidades e instituições educacionais em todo o Brasil."
          centered
        />
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl bg-primary-muted px-6 py-4">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-foreground">
              Interessado em fazer parceria com o GeoJogos?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                Entre em contato
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Pronto para Transformar Sua Sala de Aula de Geografia?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Vamos criar um jogo personalizado adaptado ao seu currículo, alunos
            e objetivos educacionais.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link href="/custom-projects">
                Iniciar um Projeto Personalizado
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
