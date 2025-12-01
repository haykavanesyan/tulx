import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Tulx',
  description: 'Tulx utility library documentation',
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}
