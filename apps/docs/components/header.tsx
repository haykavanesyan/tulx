'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

import { HeaderActions } from './header/header-actions';
import { Logo } from './header/logo';
import { MobileMenu } from './header/mobile-menu';
import { Navigation } from './header/navigation';

import { SearchDialog } from '@/components/search-dialog';
import { type FunctionMetadata } from '@/lib/functions';

export function Header() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchOpen = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleSearchSelect = useCallback(
    (fn: FunctionMetadata) => {
      router.push(`/functions/${fn.name}`);
    },
    [router]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <Navigation />
          <HeaderActions onSearchOpen={handleSearchOpen} />
          <MobileMenu
            isOpen={mobileMenuOpen}
            onToggle={handleMobileMenuToggle}
            onClose={handleMobileMenuClose}
            onSearchOpen={handleSearchOpen}
          />
        </div>
        <MobileMenu
          isOpen={mobileMenuOpen}
          onToggle={handleMobileMenuToggle}
          onClose={handleMobileMenuClose}
          onSearchOpen={handleSearchOpen}
          isContent
        />
      </div>
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onSelect={handleSearchSelect}
      />
    </header>
  );
}
