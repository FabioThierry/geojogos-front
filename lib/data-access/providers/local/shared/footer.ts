/**
 * Local Footer Provider
 */

import footerData from "@/lib/data/shared/footer";
import type { Footer } from "@/lib/data/types";

export function getLocalFooterData(): Promise<Footer> {
  return Promise.resolve(footerData);
}
