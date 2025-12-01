/**
 * Data Source Configuration
 *
 * This file centralizes the configuration for switching between data sources.
 * Currently set to "local" but can be switched to "strapi" for future CMS integration.
 *
 * No other part of the application should know about this configuration.
 * All data access goes through the services layer.
 */

export type DataSource = "local" | "strapi";

export interface DataSourceConfig {
  source: DataSource;
  strapi?: {
    apiUrl: string;
    apiToken?: string;
  };
}

/**
 * Current data source configuration
 * Switch 'source' to 'strapi' when ready to use Strapi CMS
 */
export const dataSourceConfig: DataSourceConfig = {
  source: process.env.NEXT_PUBLIC_DATA_SOURCE === "strapi" ? "strapi" : "local",
  strapi: {
    apiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337",
    apiToken: process.env.STRAPI_API_TOKEN,
  },
};

export function isUsingStrapi(): boolean {
  return dataSourceConfig.source === "strapi";
}

export function isUsingLocal(): boolean {
  return dataSourceConfig.source === "local";
}

export function getDataSource(): DataSource {
  return dataSourceConfig.source;
}
