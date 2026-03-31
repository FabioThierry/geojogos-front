/**
 * Blog Service - Centralized Data Access Layer for Blog Posts
 *
 * This service abstracts all blog data access from pages and components.
 * It decides whether to fetch from local files or Strapi CMS.
 *
 * Pages and components MUST use this service and never import directly from @/lib/data/blog.
 *
 * NOTE: Blog functionality is currently disabled. All functions return empty arrays/undefined.
 */

import type { BlogPost } from "@/lib/data/types";

/**
 * Fetch all blog posts
 * @returns Promise<BlogPost[]> - Array of all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Blog is disabled - returning empty array
  return [];
}

/**
 * Fetch a single blog post by slug
 * @param slug - The blog post slug
 * @returns Promise<BlogPost | undefined> - The blog post or undefined if not found
 */
export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  // Blog is disabled - returning undefined
  return undefined;
}

/**
 * Fetch recent blog posts
 * @param limit - Maximum number of posts to return (default: 3)
 * @returns Promise<BlogPost[]> - Array of recent blog posts
 */
export async function getRecentBlogPosts(
  limit: number = 3,
): Promise<BlogPost[]> {
  // Blog is disabled - returning empty array
  return [];
}

/**
 * Generate static params for dynamic routes
 * Used by Next.js generateStaticParams
 * @returns Promise<{ slug: string }[]>
 */
export async function generateBlogStaticParams(): Promise<{ slug: string }[]> {
  // Blog is disabled - returning empty array
  return [];
}
