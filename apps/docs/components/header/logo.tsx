import { Command } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
        <Command className="h-5 w-5 text-accent-foreground" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Tulx
      </span>
    </Link>
  );
}
