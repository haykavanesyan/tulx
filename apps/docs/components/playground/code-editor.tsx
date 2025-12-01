'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
});

type CodeEditorProps = {
  code: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  const editorOptions = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'on' as const,
      roundedSelection: false,
      scrollBeyondLastLine: false,
      automaticLayout: true,
    }),
    []
  );

  const compilerOptions = useMemo(
    () => ({
      target: 5, // ES2020
      module: 99, // ESNext
      moduleResolution: 100, // Bundler
      allowJs: true,
      esModuleInterop: true,
      skipLibCheck: true,
      strict: true,
    }),
    []
  );

  return (
    <Card className="flex flex-col min-h-[300px] lg:min-h-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Input</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 min-h-[250px] lg:min-h-0">
        <div className="h-full min-h-[250px] lg:min-h-0">
          <MonacoEditor
            height="100%"
            defaultLanguage="typescript"
            value={code}
            onChange={(value) => onChange(value || '')}
            theme="vs-dark"
            beforeMount={(monaco) => {
              monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                compilerOptions as never
              );
            }}
            options={editorOptions}
          />
        </div>
      </CardContent>
    </Card>
  );
}
