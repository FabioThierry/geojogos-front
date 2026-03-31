import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Return empty array since blog is disabled
  return [];
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  // Redirect disabled blog page
  redirect("/");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // This component is disabled - redirecting to homepage
  redirect("/");
}
