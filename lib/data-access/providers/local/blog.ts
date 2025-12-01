/**
 * Local Blog Provider
 * Provides blog post data from local files
 */

import {
  blogPosts as blogPostsData,
  getBlogPostBySlug as getBlogPostBySlugFn,
  getRecentPosts as getRecentPostsLocal,
} from "@/lib/data/blog";
import type { BlogPost } from "@/lib/data/types";

/**
 * Get all blog posts from local data
 */
export function getLocalBlogPosts(): Promise<BlogPost[]> {
  return Promise.resolve([...blogPostsData]);
}

/**
 * Get a blog post by slug from local data
 */
export function getLocalBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  return Promise.resolve(getBlogPostBySlugFn(slug));
}

/**
 * Get recent blog posts from local data
 */
export function getLocalRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  return Promise.resolve(getRecentPostsLocal(limit));
}
