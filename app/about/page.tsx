import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { getAboutPageData } from "@/lib/data-access";

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutPageData();

  return {
    title: aboutData.metadata.title,
    description: aboutData.metadata.description,
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutPageData();
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                {aboutData.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {aboutData.hero.lead}
              </p>
            </div>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <Image
                src={aboutData.hero.image}
                alt={aboutData.hero.imageAlt}
                width={720}
                height={715}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title={aboutData.story.title}
          subtitle={aboutData.story.subtitle}
        />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
          <div className="space-y-12">
            {aboutData.timeline.map((item, index) => (
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
                  <IconRenderer
                    name={aboutData.mission.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {aboutData.mission.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {aboutData.mission.description}
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <IconRenderer
                    name={aboutData.vision.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {aboutData.vision.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {aboutData.vision.description}
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <IconRenderer
                    name={aboutData.coreBelief.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {aboutData.coreBelief.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {aboutData.coreBelief.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title={aboutData.values.title}
          subtitle="Os princípios que guiam tudo o que fazemos"
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutData.values.items.map((value) => {
            return (
              <Card
                key={value.title}
                className="group transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <IconRenderer
                      name={value.iconKey}
                      className="h-7 w-7 text-primary-foreground"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Geography + Education + Games */}
      {/* <section className="bg-primary-muted py-20">
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
      </section> */}

      {/* CTA */}
      <section className="py-20 ">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {aboutData.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {aboutData.cta.subtitle}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <Link href="/custom-projects">{aboutData.cta.primary}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/contact">{aboutData.cta.secondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
