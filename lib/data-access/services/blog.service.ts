/**
 * Blog Service - Centralized Data Access Layer for Blog Posts
 *
 * This service abstracts all blog data access from pages and components.
 * It decides whether to fetch from local files or Strapi CMS.
 *
 * Pages and components MUST use this service and never import directly from @/lib/data/blog.
 */

import type { BlogPost } from "@/lib/data/types";
import { getDataSource } from "../config";

// Import local data provider
import {
  getLocalBlogPosts,
  getLocalBlogPostBySlug,
  getLocalRecentPosts,
} from "../providers/local/blog";

/**
 * Fetch all blog posts
 * @returns Promise<BlogPost[]> - Array of all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteBlogPosts();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalBlogPosts();
}

/**
 * Fetch a single blog post by slug
 * @param slug - The blog post slug
 * @returns Promise<BlogPost | undefined> - The blog post or undefined if not found
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteBlogPostBySlug(slug);
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalBlogPostBySlug(slug);
}

/**
 * Fetch recent blog posts
 * @param limit - Maximum number of posts to return (default: 3)
 * @returns Promise<BlogPost[]> - Array of recent blog posts
 */
export async function getRecentBlogPosts(
  limit: number = 3
): Promise<BlogPost[]> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteRecentPosts(limit);
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalRecentPosts(limit);
}

/**
 * Generate static params for dynamic routes
 * Used by Next.js generateStaticParams
 * @returns Promise<{ slug: string }[]>
 */
export async function generateBlogStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
