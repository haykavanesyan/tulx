import { notFound } from 'next/navigation';

import { CodeBlock } from '@/components/code-block';
import { Footer } from '@/components/footer';
import { FunctionActions } from '@/components/function/function-actions';
import { FunctionHeader } from '@/components/function/function-header';
import { RelatedFunctions } from '@/components/function/related-functions';
import { Header } from '@/components/header';
import { getFunction, getFunctions } from '@/lib/functions';
import {
  createExampleCode,
  createImportStatement,
  getFunctionSource,
} from '@/lib/utils/code';

type FunctionPageProps = {
  params: Promise<{ name: string }>;
};

const RELATED_FUNCTIONS_LIMIT = 6;

export default async function FunctionPage({ params }: FunctionPageProps) {
  const { name } = await params;
  const fn = await getFunction(name);

  if (!fn) {
    notFound();
  }

  const sourceCode = await getFunctionSource(fn.path);
  const allFunctions = await getFunctions();
  const relatedFunctions = allFunctions
    .filter((f) => f.category === fn.category && f.name !== fn.name)
    .slice(0, RELATED_FUNCTIONS_LIMIT);

  const importStatement = createImportStatement(fn.name);
  const exampleCode = createExampleCode(fn.name, fn.description, fn.example);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4 max-w-4xl">
        <FunctionHeader function={fn} />
        <FunctionActions functionName={fn.name} />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <CodeBlock code={importStatement} title="Import" />
          </section>

          {sourceCode && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Source Code</h2>
              <CodeBlock code={sourceCode} title="Implementation" />
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <CodeBlock code={exampleCode} />
          </section>

          <RelatedFunctions functions={relatedFunctions} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
