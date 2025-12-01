import type { Metadata } from "next"
import { games } from "@/lib/data/games"
import { GamesGrid } from "@/components/games-grid"

export const metadata: Metadata = {
  title: "Games",
  description:
    "Explore our collection of educational games for Geography classrooms. Digital games, board games, and gamified learning experiences.",
}

export default function GamesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Our <span className="text-primary">Games</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore our collection of educational games designed to transform Geography education. From interactive
            digital experiences to engaging board games, find the perfect tool for your classroom.
          </p>
        </div>
      </section>

      {/* Games Grid with Filters */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <GamesGrid games={games} />
      </section>
    </div>
  )
}
