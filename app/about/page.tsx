import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Gamepad2,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a GeoJogos - nossa história, missão e compromisso em transformar o ensino de Geografia através da aprendizagem baseada em jogos.",
};

const values = [
  {
    icon: BookOpen,
    title: "Excelência Educacional",
    description:
      "Todo jogo que criamos é fundamentado em pesquisa pedagógica e projetado para alcançar objetivos de aprendizagem específicos.",
  },
  {
    icon: Users,
    title: "Design Centrado no Professor",
    description:
      "Trabalhamos junto aos educadores para entender os desafios reais da sala de aula e desenvolver soluções práticas.",
  },
  {
    icon: Gamepad2,
    title: "Brincadeira Significativa",
    description:
      "Os jogos devem ser envolventes E educacionais. Nunca sacrificamos o aprendizado pelo entretenimento ou vice-versa.",
  },
  {
    icon: Globe,
    title: "Relevância Local",
    description:
      "Nossos jogos refletem a geografia brasileira e podem ser personalizados para abordar contextos regionais e locais.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "O Início",
    description:
      "GeoJogos começou como um projeto de pesquisa explorando a aprendizagem baseada em jogos no ensino de Geografia.",
  },
  {
    year: "2021",
    title: "Primeiros Jogos",
    description:
      "Desenvolvemos nossos primeiros jogos de tabuleiro educacionais e os testamos em escolas parceiras.",
  },
  {
    year: "2022",
    title: "Digitalizando",
    description:
      "Expandimos para o desenvolvimento de jogos digitais, criando experiências interativas para computadores e tablets.",
  },
  {
    year: "2023",
    title: "Desenvolvimento Customizado",
    description:
      "Lançamos nosso serviço de desenvolvimento de jogos customizados para escolas e instituições educacionais.",
  },
  {
    year: "2024",
    title: "Crescimento de Impacto",
    description:
      "Nossos jogos agora são usados em salas de aula em todo o Brasil, ajudando milhares de alunos a aprender Geografia.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Sobre o <span className="text-primary">GeoJogos</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Somos um estúdio de jogos educacionais dedicado a transformar a
                forma como a Geografia é ensinada e aprendida nas escolas.
                Através de design inovador de jogos e expertise pedagógica,
                criamos experiências de aprendizagem que engajam, desafiam e
                inspiram os alunos.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/students-board-game-map-spatial-thinking-classroom.jpg"
                alt="Equipe GeoJogos trabalhando"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Nossa História"
          subtitle="De projeto de pesquisa a estúdio de jogos educacionais"
        />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-sm font-semibold text-primary">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
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

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Missão
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Melhorar a educação em Geografia no Brasil através de jogos
                  educacionais inovadores, baseados em pesquisa, que engajam os
                  alunos e apoiam os professores na criação de experiências de
                  aprendizagem significativas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Visão</h3>
                <p className="mt-3 text-muted-foreground">
                  Um futuro onde toda sala de aula de Geografia tem acesso a
                  jogos educacionais de alta qualidade que tornam a aprendizagem
                  envolvente, acessível e eficaz para todos os alunos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Crença Central
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Aprender através da brincadeira não é apenas para crianças.
                  Jogos bem projetados podem criar experiências poderosas de
                  aprendizagem para alunos de todas as idades e origens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Nossos Valores"
          subtitle="Os princípios que guiam tudo o que fazemos"
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card
              key={value.title}
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Geography + Education + Games */}
      <section className="bg-primary-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Geografia + Educação + Design de Jogos
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  GeoJogos existe na intersecção de três disciplinas: Geografia,
                  Educação e Design de Jogos. Esta combinação única nos permite
                  criar experiências educacionais que são pedagogicamente
                  sólidas, geograficamente precisas e genuinamente divertidas de
                  jogar.
                </p>
                <p>
                  Nossa equipe inclui geógrafos que entendem o conteúdo,
                  educadores que entendem a aprendizagem e designers de jogos
                  que entendem o engajamento. Juntos, criamos jogos que
                  funcionam em salas de aula reais com alunos reais.
                </p>
                <p>
                  Acreditamos que os jogos não são apenas entretenimento—eles
                  são ferramentas poderosas para a aprendizagem. Quando
                  projetados com cuidado, os jogos podem ensinar conceitos
                  complexos, desenvolver habilidades críticas e criar
                  experiências de aprendizagem memoráveis que os métodos
                  tradicionais não conseguem igualar.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/digital-geography-quiz-game-brazil-map.jpg"
                alt="Geografia"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/teacher-customizing-educational-materials-local-ma.jpg"
                alt="Educação"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/educational-board-game-climate-zones-world-map.jpg"
                alt="Design de Jogos"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/classroom-students-playing-educational-game-geogra.jpg"
                alt="Alunos Aprendendo"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Quer Trabalhar Conosco?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Seja um professor procurando por jogos educacionais ou uma escola
          interessada em desenvolvimento personalizado, gostaríamos de ouvir
          você.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            <Link href="/custom-projects">
              Explorar Projetos Personalizados
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/contact">Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
