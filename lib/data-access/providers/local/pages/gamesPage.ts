/**
 * Local Games Page Provider
 */

import gamesPageData from "@/lib/data/pages/gamesPage";
import type { GamesPageType } from "@/lib/data/types";

export function getLocalGamesPageData(): Promise<GamesPageType> {
  return Promise.resolve(gamesPageData);
}
