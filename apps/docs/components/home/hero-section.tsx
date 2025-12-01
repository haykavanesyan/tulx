import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  HERO_BADGE_TEXT,
  HERO_DESCRIPTION,
  HERO_TITLE,
  INSTALL_COMMAND,
} from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            {HERO_BADGE_TEXT}
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {HERO_TITLE}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">{HERO_DESCRIPTION}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/functions">
              Browse Functions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/playground">
              Try Playground
              <Code2 className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="bg-muted border border-border rounded-lg px-4 py-3 inline-block mt-8">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-muted-foreground" />
            <code className="font-mono text-sm text-foreground select-all">
              {INSTALL_COMMAND}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
