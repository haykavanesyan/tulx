'use client';

import { Search } from 'lucide-react';
import { useRef, useEffect } from 'react';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

import type { FunctionMetadata } from '@/lib/functions';

type SearchBarProps = {
  searchQuery: string;
  searchResults: FunctionMetadata[];
  isSearching: boolean;
  onQueryChange: (query: string) => void;
  onFunctionSelect: (fn: FunctionMetadata) => void;
  onClose: () => void;
};

export function SearchBar({
  searchQuery,
  searchResults,
  isSearching,
  onQueryChange,
  onFunctionSelect,
  onClose,
}: SearchBarProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="relative flex-1 w-full sm:w-auto sm:min-w-[300px]"
      ref={searchRef}
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search functions..."
        value={searchQuery}
        onChange={(e) => onQueryChange(e.target.value)}
        className="pl-10"
      />
      {searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {isSearching ? (
            <div className="text-center py-4 text-muted-foreground text-sm">
              Searching...
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2 space-y-1">
              {searchResults.map((fn) => (
                <button
                  key={fn.name}
                  onClick={() => onFunctionSelect(fn)}
                  className="w-full text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {fn.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {fn.description}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="ml-2 text-xs shrink-0"
                    >
                      {fn.category}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground text-sm">
              No functions found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
