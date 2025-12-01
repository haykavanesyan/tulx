import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import type { FunctionMetadata } from '@/lib/functions';

import { Badge } from '@/components/ui/badge';

type FunctionHeaderProps = {
  function: FunctionMetadata;
};

export function FunctionHeader({ function: fn }: FunctionHeaderProps) {
  return (
    <>
      <Link
        href="/functions"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Functions
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold font-mono">{fn.name}</h1>
          <Badge>{fn.category}</Badge>
        </div>
        <p className="text-xl text-muted-foreground">{fn.description}</p>
      </div>
    </>
  );
}
