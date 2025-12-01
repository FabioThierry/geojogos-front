/**
 * Local Navigation Provider
 */

import navData from "@/lib/data/shared/nav";
import type { SiteNav } from "@/lib/data/types";

export function getLocalNavData(): Promise<SiteNav> {
  return Promise.resolve(navData);
}
