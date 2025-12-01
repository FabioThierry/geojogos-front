import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/ui/blog-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos e pesquisa sobre educação em Geografia, aprendizagem baseada em jogos e desenvolvimento de jogos educacionais.",
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Nosso <span className="text-primary">Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Insights sobre educação em Geografia, pesquisa sobre aprendizagem
            baseada em jogos, e guias práticos para implementar jogos
            educacionais em sua sala de aula.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Últimos Artigos"
          subtitle="Pesquisa, guias e insights para educadores"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Mantenha-se Atualizado
          </h2>
          <p className="mt-4 text-muted-foreground">
            Inscreva-se para receber novos artigos, descobertas de pesquisa e
            recursos educacionais diretamente em sua caixa de entrada.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Inscrição para newsletter em breve.
          </p>
        </div>
      </section>
    </div>
  );
}
