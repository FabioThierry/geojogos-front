/**
 * Local About Page Provider
 */

import aboutData from "@/lib/data/pages/about";
import type { AboutType } from "@/lib/data/types";

export function getLocalAboutData(): Promise<AboutType> {
  return Promise.resolve(aboutData);
}
