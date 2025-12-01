import Link from 'next/link';

import { CATEGORY_ICONS } from '@/lib/constants';
import {
  categories,
  getFunctionsByCategory,
  type FunctionCategory,
} from '@/lib/functions';

type CategoryWithCount = {
  id: FunctionCategory;
  name: string;
  description: string;
  count: number;
  Icon: (typeof CATEGORY_ICONS)[FunctionCategory];
};

export async function CategoriesSection() {
  const categoryCounts: CategoryWithCount[] = await Promise.all(
    categories.map(async (category) => {
      const functions = await getFunctionsByCategory(category.id);
      return {
        ...category,
        count: functions.length,
        Icon: CATEGORY_ICONS[category.id],
      };
    })
  );

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryCounts.map((category) => {
          const Icon = category.Icon;
          return (
            <Link
              key={category.id}
              href={`/functions?category=${category.id}`}
              className="group block h-full rounded-xl border border-border bg-card p-6 shadow transition-all duration-150 hover:border-primary hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="px-2 py-1 text-xs rounded-md bg-background border border-border text-muted-foreground">
                  {category.count} functions
                </span>
              </div>
              <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary text-lg">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
