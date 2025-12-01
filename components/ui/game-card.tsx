import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Game } from "@/lib/data/games"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={game.coverImage || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge
            variant={game.type === "digital" ? "default" : "secondary"}
            className={game.type === "digital" ? "bg-primary text-primary-foreground" : "bg-foreground text-background"}
          >
            {game.type === "digital" ? "Digital" : "Board Game"}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{game.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{game.shortDescription}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Link href={`/games/${game.slug}`}>View Game</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
