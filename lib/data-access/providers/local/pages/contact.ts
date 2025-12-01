/**
 * Local Contact Page Provider
 */

import contactData from "@/lib/data/pages/contact";
import type { ContactType } from "@/lib/data/types";

export function getLocalContactData(): Promise<ContactType> {
  return Promise.resolve(contactData);
}
