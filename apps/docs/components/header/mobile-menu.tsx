'use client';

import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';

import { NAVIGATION_ITEMS } from '@/lib/constants';

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onSearchOpen: () => void;
  isContent?: boolean;
};

export function MobileMenu({
  isOpen,
  onToggle,
  onClose,
  onSearchOpen,
  isContent = false,
}: MobileMenuProps) {
  const handleItemClick = () => {
    onClose();
  };

  const handleSearchClick = () => {
    onSearchOpen();
    onClose();
  };

  if (isContent) {
    return (
      <>
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                onClick={handleItemClick}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <button
                onClick={handleSearchClick}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-border/80 transition-colors text-muted-foreground"
              >
                <Search className="h-4 w-4" />
                <span className="text-sm">Search</span>
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
