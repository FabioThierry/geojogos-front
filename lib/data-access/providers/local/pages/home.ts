/**
 * Local Home Page Provider
 */

import homeData from "@/lib/data/pages/home";
import type { HomeType } from "@/lib/data/types";

export function getLocalHomeData(): Promise<HomeType> {
  return Promise.resolve(homeData);
}
