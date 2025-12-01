import { Play } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type FunctionActionsProps = {
  functionName: string;
};

export function FunctionActions({ functionName }: FunctionActionsProps) {
  return (
    <div className="flex gap-4 mb-8">
      <Button asChild>
        <Link href={`/playground?function=${functionName}`}>
          <Play className="h-4 w-4 mr-2" />
          Try in Playground
        </Link>
      </Button>
    </div>
  );
}
