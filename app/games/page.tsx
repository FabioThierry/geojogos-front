import type { Metadata } from "next";
import { games } from "@/lib/data/games";
import { GamesGrid } from "@/components/games-grid";

export const metadata: Metadata = {
  title: "Jogos",
  description:
    "Explore nossa coleção de jogos educacionais para aulas de Geografia. Jogos digitais, jogos de tabuleiro e experiências de aprendizagem gamificadas.",
};

export default function GamesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Nossos <span className="text-primary">Jogos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore nossa coleção de jogos educacionais projetados para
            transformar a educação em Geografia. De experiências digitais
            interativas a jogos de tabuleiro envolventes, encontre a ferramenta
            perfeita para sua sala de aula.
          </p>
        </div>
      </section>

      {/* Games Grid with Filters */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <GamesGrid games={games} />
      </section>
    </div>
  );
}
