# Data Access Layer Refactoring Documentation

## Overview

This project has been refactored to use a **centralized data access layer** that abstracts all content retrieval. This architecture enables seamless migration from local data files to a headless CMS (Strapi) without requiring changes to pages or components.

## Architecture

### Core Principle

**Pages and components NEVER import directly from `@/lib/data/`**

All data access flows through a centralized service layer at `@/lib/data-access/`.

```
Pages/Components
      ↓
Data Access Services (@/lib/data-access/)
      ↓
Data Source Configuration
      ↓
Local Providers OR CMS Providers
      ↓
Data (Local Files OR Strapi CMS)
```

## Directory Structure

```
lib/
├── data/                          # Original local data (DEPRECATED from page imports)
│   ├── games.ts                   # Game data
│   ├── blog.tsx                   # Blog posts
│   ├── types.ts                   # Type definitions (still used!)
│   ├── pages/                     # Page content
│   │   ├── home.ts
│   │   ├── about.ts
│   │   ├── contact.ts
│   │   ├── gamesPage.ts
│   │   ├── customProjects.ts
│   │   └── blogMeta.ts
│   └── shared/                    # Shared content
│       ├── nav.ts
│       └── footer.ts
│
└── data-access/                   # NEW: Centralized data access layer
    ├── index.ts                   # Main exports (use this!)
    ├── config.ts                  # Data source configuration
    ├── services/                  # Service layer
    │   ├── games.service.ts
    │   ├── blog.service.ts
    │   ├── pages.service.ts
    │   └── shared.service.ts
    └── providers/                 # Data providers
        └── local/                 # Current local providers
            ├── games.ts
            ├── blog.ts
            ├── pages/
            │   ├── home.ts
            │   ├── about.ts
            │   ├── contact.ts
            │   ├── gamesPage.ts
            │   ├── customProjects.ts
            │   └── blogMeta.ts
            └── shared/
                ├── nav.ts
                └── footer.ts
```

## How to Use

### In Pages (Server Components)

```typescript
// ❌ WRONG - Direct import from data
import { getFeaturedGames } from "@/lib/data/games";

// ✅ CORRECT - Import from centralized service
import { getFeaturedGames, getAllGames } from "@/lib/data-access";

export default async function GamesPage() {
  const games = await getAllGames();
  const featured = await getFeaturedGames();
  // ...
}
```

### In Components

**For Server Components:**

```typescript
// ✅ Receive data as props from parent page
interface GameCardProps {
  game: Game; // Type from @/lib/data/types
}

export function GameCard({ game }: GameCardProps) {
  // Use the game data
}
```

**For Client Components:**

```typescript
// ✅ Types are imported from @/lib/data/types
import type { Game } from "@/lib/data/types";

interface GamesGridProps {
  games: Game[];
}

export function GamesGrid({ games }: GamesGridProps) {
  // Component receives pre-fetched data
}
```

## Configuration

### Switch Data Source

Edit `lib/data-access/config.ts` or use environment variables:

```typescript
// Set in .env.local
NEXT_PUBLIC_DATA_SOURCE=local  # or "strapi"
```

### Current Settings (Local)

```typescript
export const dataSourceConfig: DataSourceConfig = {
  source: process.env.NEXT_PUBLIC_DATA_SOURCE === "strapi" ? "strapi" : "local",
  strapi: {
    apiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337",
    apiToken: process.env.STRAPI_API_TOKEN,
  },
};
```

## Services Available

### Games Service

```typescript
import {
  getAllGames,
  getGameBySlug,
  getFeaturedGames,
  filterGames,
  generateGameStaticParams,
} from "@/lib/data-access";

// All functions are async
const games = await getAllGames();
const game = await getGameBySlug("my-game");
const featured = await getFeaturedGames();
const filtered = await filterGames("digital", "geography");
const params = await generateGameStaticParams();
```

### Blog Service

```typescript
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRecentBlogPosts,
  generateBlogStaticParams,
} from "@/lib/data-access";

const posts = await getAllBlogPosts();
const post = await getBlogPostBySlug("my-post");
const recent = await getRecentBlogPosts(3);
const params = await generateBlogStaticParams();
```

### Pages Service

```typescript
import {
  getHomePageData,
  getAboutPageData,
  getContactPageData,
  getGamesPageData,
  getCustomProjectsPageData,
  getBlogMetaPageData,
} from "@/lib/data-access";

const homeData = await getHomePageData();
const aboutData = await getAboutPageData();
// ... and so on
```

### Shared Service

```typescript
import { getNavigationData, getFooterData } from "@/lib/data-access";

const nav = await getNavigationData();
const footer = await getFooterData();
```

## Migration Path to Strapi

### Step 1: Create Strapi Provider

Create a new provider file: `lib/data-access/providers/strapi/games.ts`

```typescript
export async function getRemoteGames(): Promise<Game[]> {
  const response = await fetch(`${strapiUrl}/api/games`);
  return response.json();
}
```

### Step 2: Update Service

Update `lib/data-access/services/games.service.ts`:

```typescript
import { getRemoteGames } from "./providers/strapi/games";

export async function getAllGames(): Promise<Game[]> {
  if (getDataSource() === "strapi") {
    return getRemoteGames(); // ← Implement this
  }
  return getLocalGames();
}
```

### Step 3: Switch Configuration

```bash
NEXT_PUBLIC_DATA_SOURCE=strapi
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi.com
STRAPI_API_TOKEN=your_token
```

### Step 4: Done!

No changes needed in pages or components. They automatically use Strapi data.

## Key Benefits

✅ **Decoupling**: Pages don't know where data comes from  
✅ **Type Safety**: All data is strongly typed via `@/lib/data/types.ts`  
✅ **Easy Migration**: Switch from local to CMS by changing config only  
✅ **Testable**: Services can be mocked for testing  
✅ **Maintainable**: Centralized data access logic  
✅ **Async by Default**: All functions return promises (ready for API calls)

## Data Types

All TypeScript types are imported from `@/lib/data/types.ts`:

```typescript
import type {
  Game,
  BlogPost,
  HomeType,
  AboutType,
  SiteNav,
  Footer,
  // ... and more
} from "@/lib/data/types";
```

## Strict Rules

1. **Pages MUST use services**: Never import from `@/lib/data/*.ts` directly
2. **Components receive data as props**: No direct service calls from components
3. **Types are OK**: Only import types from `@/lib/data/types.ts`
4. **All functions are async**: Services always return Promises
5. **Configuration is centralized**: One place to control data source

## Current Refactored Pages

- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/games/page.tsx` - Games listing
- `app/games/[slug]/page.tsx` - Game detail
- `app/blog/page.tsx` - Blog listing
- `app/blog/[slug]/page.tsx` - Blog post detail
- `app/contact/page.tsx` - Contact page
- `app/custom-projects/page.tsx` - Custom projects page
- `app/layout.tsx` - Root layout with Header/Footer

## Current Refactored Components

- `components/layout/header.tsx` - Now receives `navData` as prop
- `components/layout/footer.tsx` - Now receives `footerData` as prop
- `components/games-grid.tsx` - Receives games as prop
- `components/ui/game-card.tsx` - Receives game as prop
- `components/ui/blog-card.tsx` - Receives post as prop

## Next Steps (When Implementing Strapi)

1. Create Strapi providers in `lib/data-access/providers/strapi/`
2. Implement fetch functions for each service
3. Update services to call Strapi providers
4. Set environment variables
5. Deploy with no changes to pages/components! ✨

## Questions?

Refer to the service files in `lib/data-access/services/` for detailed function signatures and documentation.
