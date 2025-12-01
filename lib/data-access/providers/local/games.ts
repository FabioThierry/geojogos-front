/**
 * Local Games Provider
 * Provides game data from local files
 */

import {
  games as gamesData,
  getGameBySlug as getLocalGameBySlugFn,
  getFeaturedGames as getFeaturedGamesLocal,
  filterGames as filterGamesLocal,
} from "@/lib/data/games";
import type { Game } from "@/lib/data/types";

/**
 * Get all games from local data
 */
export function getLocalGames(): Promise<Game[]> {
  return Promise.resolve([...gamesData]);
}

/**
 * Get a game by slug from local data
 */
export function getLocalGameBySlug(slug: string): Promise<Game | undefined> {
  return Promise.resolve(getLocalGameBySlugFn(slug));
}

/**
 * Get featured games from local data
 */
export function getLocalFeaturedGames(): Promise<Game[]> {
  return Promise.resolve(getFeaturedGamesLocal());
}

/**
 * Filter games by type and/or category from local data
 */
export function getLocalFilteredGames(
  type?: "digital" | "boardgame",
  category?: "geography" | "interdisciplinary"
): Promise<Game[]> {
  return Promise.resolve(filterGamesLocal(type, category));
}
