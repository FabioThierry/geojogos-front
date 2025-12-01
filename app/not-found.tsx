import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 text-8xl font-bold text-primary">404</div>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        Página Não Encontrada
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Desculpe, não conseguimos encontrar a página que você está procurando.
        Ela pode ter sido movida ou não existe.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          className="bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Ir para Home
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Link href="/games" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Ver Jogos
          </Link>
        </Button>
      </div>
    </div>
  );
}
