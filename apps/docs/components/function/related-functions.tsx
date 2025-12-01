import Link from 'next/link';

import type { FunctionMetadata } from '@/lib/functions';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type RelatedFunctionsProps = {
  functions: FunctionMetadata[];
};

export function RelatedFunctions({ functions }: RelatedFunctionsProps) {
  if (functions.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Related Functions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {functions.map((relatedFn) => (
          <Link key={relatedFn.name} href={`/functions/${relatedFn.name}`}>
            <Card className="hover:bg-accent transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg font-mono">
                  {relatedFn.name}
                </CardTitle>
                <CardDescription>{relatedFn.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
