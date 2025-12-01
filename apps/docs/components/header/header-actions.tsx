'use client';

import { Github, Search } from 'lucide-react';

import { GITHUB_URL } from '@/lib/constants';

import { ThemeToggle } from './theme-toggle';

type HeaderActionsProps = {
  onSearchOpen: () => void;
};

export function HeaderActions({ onSearchOpen }: HeaderActionsProps) {
  return (
    <div className="hidden md:flex items-center gap-3">
      <button
        onClick={onSearchOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-border/80 transition-colors text-muted-foreground"
      >
        <Search className="h-4 w-4" />
        <span className="text-sm">Search</span>
        <kbd className="ml-1 px-1.5 py-0.5 text-xs rounded bg-accent border border-border">
          ⌘K
        </kbd>
      </button>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-border/80 transition-colors"
      >
        <Github className="h-4 w-4" />
        <span className="text-sm">Star</span>
      </a>
      <ThemeToggle />
    </div>
  );
}
