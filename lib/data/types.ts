// Tipos reutilizáveis para os dados do site
export type IconKey = string;

// ===== Games & Blog Content Types =====
export interface Game {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  type: "digital" | "boardgame";
  category: "geography" | "interdisciplinary";
  targetLevel: string;
  educationalObjectives: string[];
  skillsDeveloped: string[];
  howToUse: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
}

// ===== Navigation & Layout Types =====

export interface NavItem {
  name: string;
  href: string;
}

export interface Brand {
  name: string;
  logoAlt: string;
}

export interface SiteNav {
  items: NavItem[];
  contactButton: string;
  brand: Brand;
}

export interface HomeHero {
  title: string;
  subtitle: string;
  cta: { primary: string; secondary?: string };
  image?: { src: string; alt: string };
}

export interface Service {
  iconKey: IconKey;
  title: string;
  description: string;
}

export interface FeaturedSection {
  title: string;
  subtitle?: string;
  cta?: string;
}

export interface HomeType {
  hero: HomeHero;
  about: { title: string; paragraphs: string[]; cta?: string };
  services: Service[];
  benefits: Service[];
  featured: FeaturedSection;
  partners: { name: string; logo: string; alt?: string }[];
  cta: {
    title: string;
    subtitle?: string;
    primary: string;
    secondary?: string;
  };
}

export interface SiteData {
  nav: SiteNav;
  home: HomeType;
}

export interface FooterSection {
  title: string;
  items: { name: string; href: string }[];
}

export interface Footer {
  brand: { name: string; description: string; logoAlt: string };
  navigation: FooterSection;
  resources: FooterSection;
  contact: {
    title: string;
    email: string;
    location: string;
    social: { linkedin: string; instagram: string; youtube: string };
  };
  copyright: string;
}

export interface Adaptation {
  iconKey: IconKey;
  title: string;
  description: string;
}

export interface Format {
  iconKey: IconKey;
  title: string;
  features: string[];
}

export interface Example {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  iconKey: IconKey;
  title: string;
  description: string;
}

export interface AboutType {
  metadata: { title: string; description: string };
  hero: { title: string; lead: string; image: string; imageAlt: string };
  story: { title: string; subtitle: string };
  timeline: TimelineItem[];
  mission: { title: string; description: string; icon: IconKey };
  vision: { title: string; description: string; icon: IconKey };
  coreBelief: { title: string; description: string; icon: IconKey };
  values: { title: string; items: ValueItem[] };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export interface ContactType {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  info: { title: string; lead: string; email: string; location: string };
  reasons: { iconKey: IconKey; title: string; description: string }[];
  form: { title: string };
}

export interface GamesPageType {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
}

export interface CustomProjectsType {
  metadata: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    cta: string;
  };
  adaptations: Adaptation[];
  formats: Format[];
  examples: Example[];
  process: ProcessStep[];
  cta: { title: string; subtitle: string; link: string };
}

export interface BlogMetaType {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: {
    latest: string;
    subtitle: string;
    newsletter: string;
    newsletterNote: string;
  };
}
