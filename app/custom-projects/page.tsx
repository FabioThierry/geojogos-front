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

export const metadata: Metadata = {
  title: "Projetos Personalizados",
  description:
    "Desenvolvimento de jogos educacionais personalizados para escolas e professores. Criamos jogos adaptados ao seu currículo, realidade local e objetivos educacionais.",
};

const adaptations = [
  {
    icon: BookOpen,
    title: "Currículo da Escola",
    description:
      "Jogos alinhados com seus requisitos curriculares específicos e padrões de aprendizagem.",
  },
  {
    icon: MapPin,
    title: "Realidade Local",
    description:
      "Conteúdo que reflete a geografia, marcos e contexto cultural de sua região.",
  },
  {
    icon: Users,
    title: "Faixa Etária dos Alunos",
    description:
      "Dificuldade e complexidade adaptadas ao nível de desenvolvimento de seus alunos.",
  },
  {
    icon: Target,
    title: "Objetivos Educacionais",
    description:
      "Mecânicas de jogo projetadas para alcançar seus objetivos de aprendizagem específicos.",
  },
];

const formats = [
  {
    icon: Monitor,
    title: "Jogos Digitais",
    features: [
      "Experiências web interativas ou baseadas em aplicativos",
      "Rastreamento automático de progresso",
      "Dificuldade adaptativa",
      "Integração de conteúdo multimídia",
      "Funciona em computadores e tablets",
    ],
  },
  {
    icon: Puzzle,
    title: "Jogos de Tabuleiro",
    features: [
      "Componentes e materiais físicos",
      "Colaboração face a face",
      "Experiências de aprendizagem tátil",
      "Sem necessidade de tecnologia",
      "Inclui guia para professor",
    ],
  },
];

const examples = [
  {
    title: "Quiz Regional de Geografia",
    description:
      "Um jogo de quiz personalizado com os municípios, marcos e características geográficas do seu estado.",
    image: "/digital-geography-quiz-game-brazil-map.jpg",
  },
  {
    title: "Jogo de Tabuleiro de Clima Local",
    description:
      "Um jogo de tabuleiro explorando padrões climáticos e desafios ambientais específicos de sua região.",
    image: "/educational-board-game-climate-zones-world-map.jpg",
  },
  {
    title: "Simulação de Planejamento Urbano",
    description:
      "Uma simulação digital usando dados reais de sua cidade ou bairro para lições de geografia urbana.",
    image: "/city-planning-simulation-game-urban-development.jpg",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consulta Inicial",
    description:
      "Discutimos suas necessidades educacionais, requisitos curriculares e objetivos do projeto.",
  },
  {
    step: 2,
    title: "Proposta e Planejamento",
    description:
      "Criamos uma proposta detalhada incluindo conceito do jogo, cronograma e entregas.",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description:
      "Nossa equipe projeta e desenvolve o jogo com check-ins regulares e sessões de feedback.",
  },
  {
    step: 4,
    title: "Testes e Refinamento",
    description:
      "Testamos o jogo com alunos reais e incorporamos feedback para melhorias.",
  },
  {
    step: 5,
    title: "Entrega e Suporte",
    description:
      "Você recebe o jogo final com guias para professores e suporte contínuo.",
  },
];

export default function CustomProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Desenvolvimento de Jogos{" "}
                <span className="text-primary">Personalizados</span> para
                Escolas
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Cada sala de aula é única. Criamos jogos educacionais
                personalizados adaptados ao seu currículo específico, alunos e
                objetivos educacionais. Seja digital ou analógico, projetamos
                jogos que funcionam para sua realidade.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                <Link href="/contact">Iniciar um Projeto Personalizado</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/teacher-customizing-educational-materials-local-ma.jpg"
                alt="Processo de desenvolvimento de jogos personalizados"
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
          {adaptations.map((item) => (
            <Card
              key={item.title}
              className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
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
            {formats.map((format) => (
              <Card key={format.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <format.icon className="h-8 w-8" />
                      <h3 className="text-xl font-semibold">{format.title}</h3>
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
            ))}
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
            {processSteps.map((item, index) => (
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
            {examples.map((example) => (
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
            Pronto para Iniciar Seu Projeto Personalizado?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Conte-nos sobre suas necessidades educacionais e vamos criar algo
            incrível para seus alunos.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-background text-primary hover:bg-background/90"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Entre em Contato <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
