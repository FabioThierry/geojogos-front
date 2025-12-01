import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts, getBlogPostBySlug, getRecentPosts } from "@/lib/data/blog"
import { BlogCard } from "@/components/ui/blog-card"
import { ArrowLeft, Calendar, User } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div>
      {/* Back Button */}
      <div className="mx-auto max-w-4xl px-4 pt-8 lg:px-8">
        <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <Badge variant="outline" className="border-primary text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              {post.author}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.summary}</p>
        </header>

        {/* Cover Image */}
        <div className="relative mb-12 aspect-[2/1] overflow-hidden rounded-2xl">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 font-semibold text-foreground">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground">More Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.slice(0, 3).map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Want to Learn More?</h2>
        <p className="mt-4 text-muted-foreground">
          Explore our educational games or discuss a custom project for your school.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Link href="/games">View Our Games</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
