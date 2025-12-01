import Link from 'next/link';

import { NAVIGATION_ITEMS } from '@/lib/constants';

type NavigationProps = {
  onItemClick?: () => void;
};

export function Navigation({ onItemClick }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
