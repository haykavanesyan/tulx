'use client';

import type { FunctionMetadata } from '@/lib/functions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type QuickExamplesProps = {
  functions: FunctionMetadata[];
  onFunctionSelect: (fn: FunctionMetadata) => void;
};

const QUICK_EXAMPLES_COUNT = 10;

export function QuickExamples({
  functions,
  onFunctionSelect,
}: QuickExamplesProps) {
  if (functions.length === 0) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">Quick Examples</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {functions.slice(0, QUICK_EXAMPLES_COUNT).map((fn) => (
            <Button
              key={fn.name}
              variant="outline"
              size="sm"
              onClick={() => onFunctionSelect(fn)}
            >
              {fn.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
