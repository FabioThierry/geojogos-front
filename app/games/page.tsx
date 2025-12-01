import type { Metadata } from "next";
import { getGamesPageData, getAllGames } from "@/lib/data-access";
import { GamesGrid } from "@/components/games-grid";

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
  return (
    <div>
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
