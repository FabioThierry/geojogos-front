# Quick Reference Guide - Data Access Layer

## 🎯 Import Rule

**✅ DO THIS** (Pages and Components)

```typescript
import { getAllGames, getHomePageData } from "@/lib/data-access";
```

**❌ DON'T DO THIS**

```typescript
import { games } from "@/lib/data/games";
import homeData from "@/lib/data/pages/home";
```

---

## 📚 Available Services

### Games

```typescript
import {
  getAllGames,
  getGameBySlug,
  getFeaturedGames,
  filterGames,
  generateGameStaticParams,
} from "@/lib/data-access";

// Usage in pages
const games = await getAllGames();
const game = await getGameBySlug("slug");
const featured = await getFeaturedGames();
```

### Blog

```typescript
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRecentBlogPosts,
  generateBlogStaticParams,
} from "@/lib/data-access";

// Usage in pages
const posts = await getAllBlogPosts();
const post = await getBlogPostBySlug("slug");
const recent = await getRecentBlogPosts(3);
```

### Pages

```typescript
import {
  getHomePageData,
  getAboutPageData,
  getContactPageData,
  getGamesPageData,
  getCustomProjectsPageData,
  getBlogMetaPageData,
} from "@/lib/data-access";

// Usage in pages
const homeData = await getHomePageData();
```

### Shared

```typescript
import { getNavigationData, getFooterData } from "@/lib/data-access";

// Usage in layout
const navData = await getNavigationData();
const footerData = await getFooterData();
```

---

## 🧩 Type Imports

All types from `@/lib/data/types.ts`:

```typescript
import type {
  Game,
  BlogPost,
  HomeType,
  AboutType,
  ContactType,
  SiteNav,
  Footer,
  // ... more types
} from "@/lib/data/types";
```

---

## 📝 Page Example

```typescript
// ✅ CORRECT
import { getFeaturedGames } from "@/lib/data-access";

export default async function GamesPage() {
  const featured = await getFeaturedGames();

  return (
    <div>
      {featured.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

---

## 🎨 Component Example

```typescript
// ✅ CORRECT
import type { Game } from "@/lib/data/types";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div>
      <h3>{game.title}</h3>
      <p>{game.shortDescription}</p>
    </div>
  );
}
```

---

## 🔀 Dynamic Route Example

```typescript
// ✅ CORRECT
import { generateGameStaticParams, getGameBySlug } from "@/lib/data-access";

export async function generateStaticParams() {
  return await generateGameStaticParams();
}

export default async function GamePage({ params }) {
  const { slug } = await params;
  const game = await getGameBySlug(slug);

  if (!game) notFound();

  return <GameDetail game={game} />;
}
```

---

## ⚙️ Configuration

### Use Local Data (Default)

```bash
# .env.local
NEXT_PUBLIC_DATA_SOURCE=local
```

### Switch to Strapi

```bash
# .env.local
NEXT_PUBLIC_DATA_SOURCE=strapi
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi.com
STRAPI_API_TOKEN=your_token
```

---

## 🚀 When Adding a New Page

1. Make the page async
2. Import service functions
3. Await the data
4. Pass data to components
5. Components receive as props

Example:

```typescript
// app/my-page/page.tsx
import { getMyPageData } from "@/lib/data-access";
import { MyComponent } from "@/components/my-component";

export default async function MyPage() {
  const data = await getMyPageData();

  return <MyComponent data={data} />;
}
```

---

## 🔍 Where Things Are

| What          | Where                                          |
| ------------- | ---------------------------------------------- |
| Services      | `lib/data-access/services/`                    |
| Config        | `lib/data-access/config.ts`                    |
| Types         | `lib/data/types.ts`                            |
| Local Data    | `lib/data/games.ts`, `lib/data/blog.tsx`, etc. |
| Documentation | `DATA_ACCESS_REFACTOR.md`                      |
| This Guide    | `DATA_ACCESS_QUICK_REF.md`                     |

---

## ⚠️ Common Mistakes

❌ **Importing data directly**

```typescript
import { games } from "@/lib/data/games"; // WRONG!
```

❌ **Not making pages async**

```typescript
export default function Page() {
  // Should be async!
  const data = getAllGames(); // Can't use await without async!
}
```

❌ **Calling services in components**

```typescript
export function Component() {
  const games = await getAllGames(); // WRONG! Components shouldn't fetch
}
```

❌ **Not importing types correctly**

```typescript
import { Game } from "@/lib/data/games"; // Wrong import path
import type { Game } from "@/lib/data/types"; // Correct!
```

---

## ✅ Checklist Before Committing

- [ ] Pages are async functions
- [ ] All services awaited
- [ ] Imports from `@/lib/data-access` only
- [ ] Types from `@/lib/data/types`
- [ ] Data passed to components as props
- [ ] No direct imports from `lib/data/`
- [ ] No type errors in build

---

**Need help?** See `DATA_ACCESS_REFACTOR.md` for detailed documentation.
