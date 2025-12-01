import Link from 'next/link';

import { Badge } from '@/components/ui/badge';

import type { FunctionMetadata } from '@/lib/functions';

type SearchResultsProps = {
  results: FunctionMetadata[];
  isLoading: boolean;
  query: string;
  onSelect?: (fn: FunctionMetadata) => void;
};

export function SearchResults({
  results,
  isLoading,
  query,
  onSelect,
}: SearchResultsProps) {
  if (!query.trim()) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Start typing to search functions...
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-8 text-muted-foreground">Searching...</div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No functions found matching &quot;{query}&quot;
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {results.map((fn) => {
        const content = (
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{fn.name}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {fn.description}
              </div>
            </div>
            <Badge variant="secondary">{fn.category}</Badge>
          </div>
        );

        if (onSelect) {
          return (
            <button
              key={fn.name}
              onClick={() => onSelect(fn)}
              className="w-full text-left block p-3 rounded-lg border hover:bg-accent transition-colors"
            >
              {content}
            </button>
          );
        }

        return (
          <Link
            key={fn.name}
            href={`/functions/${fn.name}`}
            className="block p-3 rounded-lg border hover:bg-accent transition-colors"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
