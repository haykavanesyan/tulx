'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type OutputPanelProps = {
  output: string[];
  error: string | null;
};

export function OutputPanel({ output, error }: OutputPanelProps) {
  return (
    <Card className="flex flex-col min-h-[200px] lg:min-h-0">
      <CardHeader>
        <CardTitle>Output</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto min-h-[150px] lg:min-h-0">
        {error ? (
          <div className="text-red-500 font-mono text-sm whitespace-pre-wrap">
            Error: {error}
          </div>
        ) : output.length > 0 ? (
          <div className="space-y-2">
            {output.map((line, index) => (
              <div key={index} className="font-mono text-sm text-foreground">
                {line}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">
            Click &quot;Run&quot; to execute your code
          </div>
        )}
      </CardContent>
    </Card>
  );
}
