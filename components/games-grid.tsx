"use client"

import { useState } from "react"
import { GameCard } from "@/components/ui/game-card"
import { Button } from "@/components/ui/button"
import type { Game } from "@/lib/data/games"

interface GamesGridProps {
  games: Game[]
}

type FilterType = "all" | "digital" | "boardgame"
type FilterCategory = "all" | "geography" | "interdisciplinary"

export function GamesGrid({ games }: GamesGridProps) {
  const [typeFilter, setTypeFilter] = useState<FilterType>("all")
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>("all")

  const filteredGames = games.filter((game) => {
    if (typeFilter !== "all" && game.type !== typeFilter) return false
    if (categoryFilter !== "all" && game.category !== categoryFilter) return false
    return true
  })

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">Type</span>
          <div className="flex gap-2">
            <Button
              variant={typeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("all")}
              className={
                typeFilter === "all"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              All
            </Button>
            <Button
              variant={typeFilter === "digital" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("digital")}
              className={
                typeFilter === "digital"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Digital
            </Button>
            <Button
              variant={typeFilter === "boardgame" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("boardgame")}
              className={
                typeFilter === "boardgame"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Board Game
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">Category</span>
          <div className="flex gap-2">
            <Button
              variant={categoryFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("all")}
              className={
                categoryFilter === "all"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              All
            </Button>
            <Button
              variant={categoryFilter === "geography" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("geography")}
              className={
                categoryFilter === "geography"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Geography
            </Button>
            <Button
              variant={categoryFilter === "interdisciplinary" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("interdisciplinary")}
              className={
                categoryFilter === "interdisciplinary"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Interdisciplinary
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""}
      </p>

      {/* Games Grid */}
      {filteredGames.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No games found matching your filters.</p>
          <Button
            variant="outline"
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => {
              setTypeFilter("all")
              setCategoryFilter("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
