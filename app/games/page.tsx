import type { Metadata } from "next";
import { getGamesPageData, getAllGames } from "@/lib/data-access";
import { GamesGrid } from "@/components/games-grid";
import { StructuredData } from "@/components/ui/structured-data";
import { getWebPageSchema, getServiceSchema } from "@/lib/schemas";

export async function generateMetadata(): Promise<Metadata> {
  const gamesPageData = await getGamesPageData();

  return {
    title: gamesPageData.metadata.title,
    description: gamesPageData.metadata.description,
  };
}

export default async function GamesPage() {
  const gamesPageData = await getGamesPageData();
  const games = await getAllGames();

  const gamesPageSchema = getWebPageSchema(
    "Jogos Educacionais - GeoJogos",
    "Conheça nossa coleção de jogos educacionais personalizados para ensino de Geografia",
    "https://www.geojogos.com.br/games",
    [
      { name: "Home", url: "https://www.geojogos.com.br" },
      { name: "Jogos", url: "https://www.geojogos.com.br/games" },
    ],
  );

  return (
    <div>
      <StructuredData schema={gamesPageSchema} />
      <StructuredData
        schema={getServiceSchema(
          "Catálogo de Jogos Educacionais",
          "Coleção completa de jogos educacionais para Geografia",
        )}
      />
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {gamesPageData.hero.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">
              {gamesPageData.hero.title.split(" ").slice(-1).join(" ")}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {gamesPageData.hero.subtitle}
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
