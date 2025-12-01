import { Github, Heart } from 'lucide-react';
import Link from 'next/link';

import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tulx</h3>
            <p className="text-base text-muted-foreground">
              A modern collection of TypeScript utility functions for everyday
              development. Fast, tested, and tree-shakeable.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0">
              <Separator orientation="vertical" />
            </div>
            <div className="md:pl-8">
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="/functions"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    All Functions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/playground"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Playground
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0">
              <Separator orientation="vertical" />
            </div>
            <div className="md:pl-8">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a
                    href="https://github.com/haykavanesyan/tulx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-border px-4 sm:px-16">
          <p className="text-sm sm:text-base text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Tulx. MIT License.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-1 text-center sm:text-right">
            Made with{' '}
            <Heart
              className="h-4 w-4 text-red-500 fill-red-500"
              aria-label="love"
            />{' '}
            <span className="whitespace-nowrap">
              by developers, for developers
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
