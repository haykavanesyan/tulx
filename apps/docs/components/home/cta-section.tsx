import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

import { GITHUB_URL } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-10 sm:p-16 text-center shadow-lg">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-primary">
          Ready to get started?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Install UtilKit today and speed up your development with battle-tested
          utility functions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition w-full sm:w-auto justify-center"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground hover:border-primary hover:bg-accent transition-colors font-medium w-full sm:w-auto justify-center"
          >
            Try it now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
