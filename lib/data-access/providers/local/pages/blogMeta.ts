/**
 * Local Blog Meta Page Provider
 */

import blogMetaData from "@/lib/data/pages/blogMeta";
import type { BlogMetaType } from "@/lib/data/types";

export function getLocalBlogMetaData(): Promise<BlogMetaType> {
  return Promise.resolve(blogMetaData);
}
