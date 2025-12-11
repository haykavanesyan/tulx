'use client';

import * as tulxUtils from '@tulx/utils';
import { useSearchParams } from 'next/navigation';
import {
  Suspense,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';

import type { FunctionMetadata } from '@/lib/functions';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CodeEditor } from '@/components/playground/code-editor';
import { OutputPanel } from '@/components/playground/output-panel';
import { PlaygroundActions } from '@/components/playground/playground-actions';
import { QuickExamples } from '@/components/playground/quick-examples';
import { SearchBar } from '@/components/playground/search-bar';
import { DEFAULT_PLAYGROUND_CODE, SEARCH_DEBOUNCE_MS } from '@/lib/constants';
import {
  createExampleCode,
  createSandboxCode,
  formatConsoleOutput,
  transformImports,
} from '@/lib/utils/playground';

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const functionName = searchParams.get('function');

  const [code, setCode] = useState(DEFAULT_PLAYGROUND_CODE);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [functions, setFunctions] = useState<FunctionMetadata[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FunctionMetadata[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const initialCodeRef = useRef<string>(DEFAULT_PLAYGROUND_CODE);
  const codeRef = useRef<string>(DEFAULT_PLAYGROUND_CODE);

  useEffect(() => {
    codeRef.current = code;
  }, [code]);

  const runCode = useCallback((codeToRun?: string) => {
    const codeToExecute = codeToRun ?? codeRef.current;
    setIsRunning(true);
    setOutput([]);
    setError(null);

    setTimeout(() => {
      try {
        const logs: string[] = [];
        const consoleMock = {
          log: (...args: unknown[]) => {
            logs.push(formatConsoleOutput(args));
          },
        };

        const transformedCode = transformImports(codeToExecute);
        const sandboxCode = createSandboxCode(transformedCode);
        const executeCode = new Function('tulxUtils', 'console', sandboxCode);
        executeCode(tulxUtils, consoleMock);

        setOutput(logs);
        setIsRunning(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsRunning(false);
      }
    }, 100);
  }, []);

  const resetCode = useCallback(() => {
    setCode(initialCodeRef.current);
    setOutput([]);
    setError(null);
  }, []);

  const handleFunctionSelect = useCallback((fn: FunctionMetadata) => {
    const exampleCode = createExampleCode(fn);
    setCode(exampleCode);
    initialCodeRef.current = exampleCode;
    codeRef.current = exampleCode;
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const handleRun = useCallback(() => {
    runCode();
  }, [runCode]);

  const handleReset = useCallback(() => {
    resetCode();
  }, [resetCode]);

  const handleSearchClose = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  useEffect(() => {
    const loadFunctions = async () => {
      try {
        const response = await fetch('/api/functions');
        const data = await response.json();
        setFunctions(data.functions || []);
      } catch {
        setFunctions([]);
      }
    };
    loadFunctions();
  }, []);

  useEffect(() => {
    if (functionName && functions.length > 0) {
      const fn = functions.find((f) => f.name === functionName);
      if (fn) {
        const exampleCode = createExampleCode(fn);
        setCode(exampleCode);
        initialCodeRef.current = exampleCode;
        codeRef.current = exampleCode;
        runCode(exampleCode);
      }
    }
  }, [functionName, functions, runCode]);

  useEffect(() => {
    const search = async () => {
      if (searchQuery.trim()) {
        setIsSearching(true);
        try {
          const response = await fetch(
            `/api/functions/search?q=${encodeURIComponent(searchQuery)}`
          );
          const data = await response.json();
          setSearchResults(data.functions || []);
        } catch {
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    const timeoutId = setTimeout(search, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const playgroundTitle = useMemo(() => 'Live Playground', []);

  const playgroundDescription = useMemo(
    () =>
      'Test utility functions in real-time. Select a function, modify the code, and see the results instantly.',
    []
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{playgroundTitle}</h1>
          <p className="text-muted-foreground mb-4">{playgroundDescription}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <SearchBar
              searchQuery={searchQuery}
              searchResults={searchResults}
              isSearching={isSearching}
              onQueryChange={setSearchQuery}
              onFunctionSelect={handleFunctionSelect}
              onClose={handleSearchClose}
            />
            <PlaygroundActions
              isRunning={isRunning}
              onRun={handleRun}
              onReset={handleReset}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px] lg:h-[calc(100vh-250px)]">
          <CodeEditor code={code} onChange={setCode} />
          <OutputPanel output={output} error={error} />
        </div>

        <QuickExamples
          functions={functions}
          onFunctionSelect={handleFunctionSelect}
        />
      </main>
      <Footer />
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 container mx-auto py-8 px-4">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">Live Playground</h1>
              <p className="text-muted-foreground mb-4">
                Test utility functions in real-time. Select a function, modify
                the code, and see the results instantly.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <PlaygroundContent />
    </Suspense>
  );
}
