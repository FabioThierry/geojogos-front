/**
 * Data Access Services Barrel Export
 *
 * Import centralized data services from here.
 * This is the ONLY way pages and components should access content data.
 *
 * Example:
 * import { getHomePageData, getAllGames, getBlogPostBySlug } from '@/lib/data-access';
 */

export { getDataSource, isUsingStrapi, isUsingLocal } from "./config";
export type { DataSource, DataSourceConfig } from "./config";

// Games service
export {
  getAllGames,
  getGameBySlug,
  getFeaturedGames,
  filterGames,
  generateGameStaticParams,
} from "./services/games.service";

// Blog service
export {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRecentBlogPosts,
  generateBlogStaticParams,
} from "./services/blog.service";

// Pages service
export {
  getHomePageData,
  getAboutPageData,
  getContactPageData,
  getGamesPageData,
  getCustomProjectsPageData,
  getBlogMetaPageData,
} from "./services/pages.service";

// Shared service
export { getNavigationData, getFooterData } from "./services/shared.service";
