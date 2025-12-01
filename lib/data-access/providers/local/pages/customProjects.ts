/**
 * Local Custom Projects Page Provider
 */

import customProjectsData from "@/lib/data/pages/customProjects";
import type { CustomProjectsType } from "@/lib/data/types";

export function getLocalCustomProjectsData(): Promise<CustomProjectsType> {
  return Promise.resolve(customProjectsData);
}
