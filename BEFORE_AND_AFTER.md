# Before & After Examples

## 🔄 Refactoring Examples

### Example 1: Home Page

#### ❌ BEFORE (Direct Imports)

```typescript
// app/page.tsx - BEFORE
import { getFeaturedGames } from "@/lib/data/games";
import homeData from "@/lib/data/pages/home";

export default function HomePage() {
  const featuredGames = getFeaturedGames(); // Synchronous!

  return (
    <div>
      <h1>{homeData.hero.title}</h1>
      <p>{homeData.hero.subtitle}</p>

      {featuredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

**Problems:**

- ❌ Imports directly from `lib/data`
- ❌ Can't switch data sources
- ❌ Synchronous data access
- ❌ Not testable
- ❌ Tight coupling

#### ✅ AFTER (Abstracted)

```typescript
// app/page.tsx - AFTER
import { getHomePageData, getFeaturedGames } from "@/lib/data-access";

export default async function HomePage() {
  const homeData = await getHomePageData();
  const featuredGames = await getFeaturedGames();

  return (
    <div>
      <h1>{homeData.hero.title}</h1>
      <p>{homeData.hero.subtitle}</p>

      {featuredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

**Benefits:**

- ✅ Imports from centralized layer
- ✅ Can switch data sources via config
- ✅ Async/await ready
- ✅ Easy to test (mock services)
- ✅ Loose coupling

---

### Example 2: Dynamic Game Page

#### ❌ BEFORE (Direct Imports)

```typescript
// app/games/[slug]/page.tsx - BEFORE
import { games, getGameBySlug } from "@/lib/data/games";

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug); // Synchronous!

  if (!game) notFound();

  return <GameDetail game={game} />;
}
```

**Problems:**

- ❌ Direct access to games array
- ❌ Synchronous function
- ❌ Can't migrate to API easily
- ❌ No abstraction for parameters

#### ✅ AFTER (Abstracted)

```typescript
// app/games/[slug]/page.tsx - AFTER
import { getGameBySlug, generateGameStaticParams } from "@/lib/data-access";

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

**Benefits:**

- ✅ Uses service layer
- ✅ Async-ready
- ✅ Easy to migrate to API
- ✅ Consistent parameter handling
- ✅ Scalable

---

### Example 3: Layout with Header and Footer

#### ❌ BEFORE (Direct Imports)

```typescript
// app/layout.tsx - BEFORE
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header /> {/* Header imports navData directly */}
        <main>{children}</main>
        <Footer /> {/* Footer imports footerData directly */}
      </body>
    </html>
  );
}
```

Header component:

```typescript
// components/layout/header.tsx - BEFORE
import navData from "@/lib/data/shared/nav";

export function Header() {
  return (
    <header>
      {navData.items.map((item) => (
        <Link href={item.href}>{item.name}</Link>
      ))}
    </header>
  );
}
```

**Problems:**

- ❌ Components import data directly
- ❌ No prop drilling
- ❌ Can't test components easily
- ❌ Data source hardcoded

#### ✅ AFTER (Abstracted)

```typescript
// app/layout.tsx - AFTER
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getNavigationData, getFooterData } from "@/lib/data-access";

export default async function RootLayout({ children }) {
  const navData = await getNavigationData();
  const footerData = await getFooterData();

  return (
    <html>
      <body>
        <Header navData={navData} />
        <main>{children}</main>
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
```

Header component:

```typescript
// components/layout/header.tsx - AFTER
import type { SiteNav } from "@/lib/data/types";

interface HeaderProps {
  navData: SiteNav;
}

export function Header({ navData }: HeaderProps) {
  return (
    <header>
      {navData.items.map((item) => (
        <Link href={item.href}>{item.name}</Link>
      ))}
    </header>
  );
}
```

**Benefits:**

- ✅ Components are pure and testable
- ✅ Props passed explicitly
- ✅ Easy to mock for testing
- ✅ Reusable with different data
- ✅ Clear dependencies

---

### Example 4: Component with Type Imports

#### ❌ BEFORE (Wrong Type Import)

```typescript
// components/ui/game-card.tsx - BEFORE
import type { Game } from "@/lib/data/games"; // ❌ Wrong source

export function GameCard({ game }: { game: Game }) {
  return <div>{game.title}</div>;
}
```

**Problems:**

- ❌ Imports type from data module
- ❌ Circular dependency risk
- ❌ Type and data mixed

#### ✅ AFTER (Correct Type Import)

```typescript
// components/ui/game-card.tsx - AFTER
import type { Game } from "@/lib/data/types"; // ✅ Correct!

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return <div>{game.title}</div>;
}
```

**Benefits:**

- ✅ Correct import path
- ✅ No circular dependencies
- ✅ Types separate from data
- ✅ Clear dependency chain

---

### Example 5: Blog Listing Page

#### ❌ BEFORE (Direct Array Access)

```typescript
// app/blog/page.tsx - BEFORE
import { blogPosts } from "@/lib/data/blog";
import blogMetaData from "@/lib/data/pages/blogMeta";

export default function BlogPage() {
  return (
    <div>
      <h1>{blogMetaData.hero.title}</h1>

      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

**Problems:**

- ❌ Imports raw array
- ❌ No filtering support
- ❌ Can't paginate
- ❌ Not API-ready

#### ✅ AFTER (Service-based)

```typescript
// app/blog/page.tsx - AFTER
import { getAllBlogPosts, getBlogMetaPageData } from "@/lib/data-access";

export default async function BlogPage() {
  const blogMetaData = await getBlogMetaPageData();
  const blogPosts = await getAllBlogPosts();

  return (
    <div>
      <h1>{blogMetaData.hero.title}</h1>

      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

**Benefits:**

- ✅ Service-based access
- ✅ Easy to add filtering
- ✅ Ready for pagination
- ✅ API-ready architecture
- ✅ Future-proof

---

### Example 6: Data Source Switching

#### With Configuration

```typescript
// lib/data-access/config.ts

export const dataSourceConfig = {
  source: process.env.NEXT_PUBLIC_DATA_SOURCE === "strapi" ? "strapi" : "local",
  strapi: {
    apiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    apiToken: process.env.STRAPI_API_TOKEN,
  },
};
```

```typescript
// lib/data-access/services/games.service.ts

export async function getAllGames(): Promise<Game[]> {
  if (getDataSource() === "strapi") {
    return getRemoteGames(); // Strapi provider
  }
  return getLocalGames(); // Local provider
}
```

**Switching Sources:**

```bash
# .env.local - LOCAL
NEXT_PUBLIC_DATA_SOURCE=local

# .env.local - STRAPI
NEXT_PUBLIC_DATA_SOURCE=strapi
NEXT_PUBLIC_STRAPI_API_URL=https://strapi.example.com
STRAPI_API_TOKEN=token_here
```

**Result:** ✅ No code changes needed!

---

### Example 7: Adding New Content Type

#### Old Way (Direct imports everywhere)

```typescript
// Before: Would need to update 10+ files
// - Create lib/data/movies.ts
// - Update every page that uses movies
// - Update every component
// - Change imports in multiple places
```

#### New Way (Centralized)

```typescript
// Step 1: Create data file
// lib/data/movies.ts

// Step 2: Create service
// lib/data-access/services/movies.service.ts
export async function getAllMovies(): Promise<Movie[]> {
  if (getDataSource() === "strapi") {
    return getRemoteMovies();
  }
  return getLocalMovies();
}

// Step 3: Create provider
// lib/data-access/providers/local/movies.ts
export function getLocalMovies(): Promise<Movie[]> {
  return Promise.resolve(moviesData);
}

// Step 4: Export from barrel
// lib/data-access/index.ts
export { getAllMovies } from "./services/movies.service";

// Step 5: Use in pages
import { getAllMovies } from "@/lib/data-access";

// That's it! 🎉
```

**Benefits:**

- ✅ Consistent pattern
- ✅ One place to update
- ✅ Easy to test
- ✅ Scalable

---

## 📊 Summary of Changes

| Aspect               | Before      | After       |
| -------------------- | ----------- | ----------- |
| Data Access          | Synchronous | Async/Await |
| Imports              | Scattered   | Centralized |
| Testability          | Hard        | Easy        |
| API Ready            | No          | Yes         |
| Type Safety          | Partial     | Full        |
| CMS Ready            | No          | Yes         |
| Component Complexity | High        | Low         |
| Data Coupling        | Tight       | Loose       |
| Maintenance          | Difficult   | Easy        |

---

## 🎯 Key Improvements

✅ **Async/Await Pattern**

- All data access is now Promise-based
- Ready for API integration
- Better performance with concurrent requests

✅ **Centralized Services**

- One source of truth for data access
- Easy to add features (caching, filtering, etc.)
- Consistent patterns across codebase

✅ **Testability**

- Services can be mocked
- Components are pure
- Easy to write unit tests

✅ **Scalability**

- Adding new content types is simple
- Extending providers is straightforward
- No scattered imports to update

✅ **Future-Proof**

- CMS integration ready
- Database migration ready
- Caching layer ready
- Multi-region deployment ready

---

**This refactoring sets the foundation for professional, scalable, enterprise-grade data management!** 🚀
