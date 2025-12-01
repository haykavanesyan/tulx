'use client';

import { Search } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { SEARCH_DEBOUNCE_MS } from '@/lib/constants';

import { SearchResults } from './search-dialog/search-results';

import type { FunctionMetadata } from '@/lib/functions';

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect?: (fn: FunctionMetadata) => void;
};

export function SearchDialog({
  open,
  onOpenChange,
  onSelect,
}: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FunctionMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (query.trim()) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `/api/functions/search?q=${encodeURIComponent(query)}`
          );
          const data = await response.json();
          setResults(data.functions || []);
        } catch {
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    const timeoutId = setTimeout(search, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = useCallback(
    (fn: FunctionMetadata) => {
      if (onSelect) {
        onSelect(fn);
      }
      onOpenChange(false);
      setQuery('');
    },
    [onOpenChange, onSelect]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search Functions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search functions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            <SearchResults
              results={results}
              isLoading={isLoading}
              query={query}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
