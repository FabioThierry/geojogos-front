import type { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  // Redirect disabled blog page
  redirect("/");
}

export default async function BlogPage() {
  // This component is disabled - redirecting to homepage
  redirect("/");
}
