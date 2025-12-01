/**
 * Pages Service - Centralized Data Access Layer for Page Content
 *
 * This service abstracts all page-specific content from pages and components.
 * It handles: home, about, contact, games page, custom projects, blog meta, etc.
 *
 * Pages and components MUST use this service and never import directly from @/lib/data/pages.
 */

import type {
  HomeType,
  AboutType,
  ContactType,
  GamesPageType,
  CustomProjectsType,
  BlogMetaType,
} from "@/lib/data/types";
import { getDataSource } from "../config";

// Import local data providers
import { getLocalHomeData } from "../providers/local/pages/home";
import { getLocalAboutData } from "../providers/local/pages/about";
import { getLocalContactData } from "../providers/local/pages/contact";
import { getLocalGamesPageData } from "../providers/local/pages/gamesPage";
import { getLocalCustomProjectsData } from "../providers/local/pages/customProjects";
import { getLocalBlogMetaData } from "../providers/local/pages/blogMeta";

/**
 * Fetch home page data
 * @returns Promise<HomeType> - Home page content
 */
export async function getHomePageData(): Promise<HomeType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteHomeData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalHomeData();
}

/**
 * Fetch about page data
 * @returns Promise<AboutType> - About page content
 */
export async function getAboutPageData(): Promise<AboutType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteAboutData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalAboutData();
}

/**
 * Fetch contact page data
 * @returns Promise<ContactType> - Contact page content
 */
export async function getContactPageData(): Promise<ContactType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteContactData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalContactData();
}

/**
 * Fetch games page data
 * @returns Promise<GamesPageType> - Games page content
 */
export async function getGamesPageData(): Promise<GamesPageType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteGamesPageData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalGamesPageData();
}

/**
 * Fetch custom projects page data
 * @returns Promise<CustomProjectsType> - Custom projects page content
 */
export async function getCustomProjectsPageData(): Promise<CustomProjectsType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteCustomProjectsData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalCustomProjectsData();
}

/**
 * Fetch blog meta/index page data
 * @returns Promise<BlogMetaType> - Blog meta page content
 */
export async function getBlogMetaPageData(): Promise<BlogMetaType> {
  if (getDataSource() === "strapi") {
    // TODO: Implement Strapi provider
    // return getRemoteBlogMetaData();
    throw new Error("Strapi integration not yet implemented");
  }

  return getLocalBlogMetaData();
}
