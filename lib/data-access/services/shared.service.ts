/**
 * Shared Content Service - Centralized Data Access Layer for Shared Content
 *
 * This service abstracts all shared content (navigation, footer) from components.
 * It decides whether to fetch from local files or Strapi CMS.
 *
 * Components MUST use this service and never import directly from @/lib/data/shared.
 */

import type { SiteNav, Footer } from "@/lib/data/types";
import { getDataSource } from "../config";

// Import local data providers
import { getLocalNavData } from "../providers/local/shared/nav";
import { getLocalFooterData } from "../providers/local/shared/footer";

/**
 * Fetch navigation data
 * @returns Promise<SiteNav> - Navigation content
 */
export async function getNavigationData(): Promise<SiteNav> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteNavData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalNavData();
}

/**
 * Fetch footer data
 * @returns Promise<Footer> - Footer content
 */
export async function getFooterData(): Promise<Footer> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteFooterData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalFooterData();
}
