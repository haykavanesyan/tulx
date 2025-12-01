import Link from 'next/link';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { CATEGORY_ICONS } from '@/lib/constants';
import {
  getFunctions,
  categories,
  type FunctionCategory,
  getFunctionsByCategory,
} from '@/lib/functions';

type FunctionsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function FunctionsPage({
  searchParams,
}: FunctionsPageProps) {
  const { category } = await searchParams;
  const selectedCategory = category as FunctionCategory | undefined;
  const allFunctions = await getFunctions();
  const filteredFunctions = selectedCategory
    ? await getFunctionsByCategory(selectedCategory)
    : allFunctions;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Functions</h1>
          <p className="text-muted-foreground">
            Browse all available utility functions by category
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Link href="/functions">
            <Badge
              variant={!selectedCategory ? 'default' : 'secondary'}
              className="cursor-pointer hover:bg-primary/80"
            >
              All
            </Badge>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} href={`/functions?category=${category.id}`}>
              <Badge
                variant={
                  selectedCategory === category.id ? 'default' : 'secondary'
                }
                className="cursor-pointer hover:bg-primary/80"
              >
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFunctions.map((fn) => {
            const Icon = CATEGORY_ICONS[fn.category];
            return (
              <Link
                key={fn.name}
                href={`/functions/${fn.name}`}
                className="group block h-full rounded-xl border border-border bg-card p-6 shadow transition-all duration-150 hover:border-primary hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {fn.category}
                  </Badge>
                </div>
                <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary text-lg font-mono">
                  {fn.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {fn.description}
                </p>
                {fn.example && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">
                      Example:
                    </p>
                    <code className="text-xs px-2 py-1 rounded block overflow-hidden text-ellipsis whitespace-nowrap bg-background border border-border">
                      {fn.example
                        .split('\n')[0]
                        ?.replace(/```ts?/g, '')
                        .trim() || ''}
                    </code>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {filteredFunctions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No functions found in this category.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
