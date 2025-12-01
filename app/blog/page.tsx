import type { Metadata } from "next"
import { blogPosts } from "@/lib/data/blog"
import { BlogCard } from "@/components/ui/blog-card"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and research on Geography education, game-based learning, and educational game development.",
}

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Insights on Geography education, game-based learning research, and practical guides for implementing
            educational games in your classroom.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading title="Latest Articles" subtitle="Research, guides, and insights for educators" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to receive new articles, research findings, and educational resources directly in your inbox.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Newsletter subscription coming soon.</p>
        </div>
      </section>
    </div>
  )
}
