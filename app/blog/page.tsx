import type { Metadata } from "next";
import { getAllBlogPosts, getBlogMetaPageData } from "@/lib/data-access";
import { BlogCard } from "@/components/ui/blog-card";
import { SectionHeading } from "@/components/ui/section-heading";

export async function generateMetadata(): Promise<Metadata> {
  const blogMetaData = await getBlogMetaPageData();

  return {
    title: blogMetaData.metadata.title,
    description: blogMetaData.metadata.description,
  };
}

export default async function BlogPage() {
  const blogMetaData = await getBlogMetaPageData();
  const blogPosts = await getAllBlogPosts();
  const titleParts = blogMetaData.hero.title.split(" ");
  const lastWord = titleParts.pop();

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {titleParts.join(" ")}{" "}
            <span className="text-primary">{lastWord}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {blogMetaData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title={blogMetaData.sections.latest}
          subtitle={blogMetaData.sections.subtitle}
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
            {blogMetaData.sections.newsletter}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Inscreva-se para receber novos artigos, descobertas de pesquisa e
            recursos educacionais diretamente em sua caixa de entrada.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {blogMetaData.sections.newsletterNote}
          </p>
        </div>
      </section>
    </div>
  );
}
