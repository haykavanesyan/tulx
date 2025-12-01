'use client';

import { Copy, Check } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from '@/components/ui/button';
import { COPY_SUCCESS_TIMEOUT_MS } from '@/lib/constants';

type CodeBlockProps = {
  code: string;
  language?: string;
  title?: string;
};

const DEFAULT_LANGUAGE = 'typescript';

export function CodeBlock({
  code,
  language = DEFAULT_LANGUAGE,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_SUCCESS_TIMEOUT_MS);
  }, [code]);

  const borderRadius = title ? '0 0 0.5rem 0.5rem' : '0.5rem';

  if (!mounted) {
    return (
      <div className="relative">
        {title && (
          <div className="flex items-center justify-between px-4 py-2 bg-muted border-b rounded-t-lg">
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b rounded-t-lg">
          <span className="text-sm font-medium">{title}</span>
        </div>
      )}
      <div className="relative group">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius,
            padding: '1rem',
          }}
        >
          {code}
        </SyntaxHighlighter>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
