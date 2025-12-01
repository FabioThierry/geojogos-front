/**
 * Games Service - Centralized Data Access Layer for Games
 *
 * This service abstracts all game data access from pages and components.
 * It decides whether to fetch from local files or Strapi CMS.
 *
 * Pages and components MUST use this service and never import directly from @/lib/data/games.
 */

import type { Game } from "@/lib/data/types";
import { getDataSource } from "../config";

// Import local data provider
import {
  getLocalGames,
  getLocalGameBySlug,
  getLocalFeaturedGames,
  getLocalFilteredGames,
} from "../providers/local/games";

/**
 * Fetch all games
 * @returns Promise<Game[]> - Array of all games
 */
export async function getAllGames(): Promise<Game[]> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteGames();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalGames();
}

/**
 * Fetch a single game by slug
 * @param slug - The game slug
 * @returns Promise<Game | undefined> - The game or undefined if not found
 */
export async function getGameBySlug(slug: string): Promise<Game | undefined> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteGameBySlug(slug);
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalGameBySlug(slug);
}

/**
 * Fetch featured games
 * @returns Promise<Game[]> - Array of featured games
 */
export async function getFeaturedGames(): Promise<Game[]> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteFeaturedGames();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalFeaturedGames();
}

/**
 * Filter games by type and/or category
 * @param type - Filter by game type (digital or boardgame)
 * @param category - Filter by category (geography or interdisciplinary)
 * @returns Promise<Game[]> - Filtered games
 */
export async function filterGames(
  type?: "digital" | "boardgame",
  category?: "geography" | "interdisciplinary"
): Promise<Game[]> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteFilteredGames(type, category);
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalFilteredGames(type, category);
}

/**
 * Generate static params for dynamic routes
 * Used by Next.js generateStaticParams
 * @returns Promise<{ slug: string }[]>
 */
export async function generateGameStaticParams(): Promise<{ slug: string }[]> {
  const games = await getAllGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}
