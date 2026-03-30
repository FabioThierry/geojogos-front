"use client";

import { useState } from "react";
import { GameCard } from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/data/types";

interface GamesGridProps {
  games: Game[];
}

type FilterType = "Todos" | "Digital" | "Jogo de Tabuleiro";
type FilterCategory = "Todos" | "Geografia" | "Interdisciplinar";

export function GamesGrid({ games }: GamesGridProps) {
  const [typeFilter, setTypeFilter] = useState<FilterType>("Todos");
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>("Todos");

  const filteredGames = games.filter((game) => {
    if (typeFilter !== "Todos" && game.type !== typeFilter) return false;
    if (categoryFilter !== "Todos" && game.category !== categoryFilter)
      return false;
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">
            Tipo
          </span>
          <div className="flex gap-2">
            <Button
              variant={typeFilter === "Todos" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("Todos")}
              className={
                typeFilter === "Todos"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Todos
            </Button>
            <Button
              variant={typeFilter === "Digital" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("Digital")}
              className={
                typeFilter === "Digital"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Digital
            </Button>
            <Button
              variant={
                typeFilter === "Jogo de Tabuleiro" ? "default" : "outline"
              }
              size="sm"
              onClick={() => setTypeFilter("Jogo de Tabuleiro")}
              className={
                typeFilter === "Jogo de Tabuleiro"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Jogo de Tabuleiro
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">
            Categoria
          </span>
          <div className="flex gap-2">
            <Button
              variant={categoryFilter === "Todos" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("Todos")}
              className={
                categoryFilter === "Todos"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Todos
            </Button>
            <Button
              variant={categoryFilter === "Geografia" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("Geografia")}
              className={
                categoryFilter === "Geografia"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Geografia
            </Button>
            <Button
              variant={
                categoryFilter === "Interdisciplinar" ? "default" : "outline"
              }
              size="sm"
              onClick={() => setCategoryFilter("Interdisciplinar")}
              className={
                categoryFilter === "Interdisciplinar"
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              Interdisciplinar
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-6 text-sm text-muted-foreground">
        Mostrando {filteredGames.length} jogo
        {filteredGames.length !== 1 ? "s" : ""}
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
          <p className="text-muted-foreground">
            Nenhum jogo encontrado com os filtros selecionados.
          </p>
          <Button
            variant="outline"
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => {
              setTypeFilter("Todos");
              setCategoryFilter("Todos");
            }}
          >
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  );
}
