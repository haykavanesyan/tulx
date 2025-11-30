import React from 'react';

import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-foreground mb-6 mt-8" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold text-foreground mb-4 mt-6" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold text-foreground mb-3 mt-5" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-semibold text-foreground mb-2 mt-4" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: { children?: React.ReactNode }) => (
      <p className="text-foreground mb-4 leading-7" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-foreground" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: { children?: React.ReactNode }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }: { children?: React.ReactNode }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }: { children?: React.ReactNode; className?: string }) => {
      const isInline = !props.className;
      return isInline ? (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code {...props}>{children}</code>
      );
    },
    pre: ({ children, ...props }: { children?: React.ReactNode }) => (
      <pre
        className="bg-muted p-4 rounded-lg overflow-x-auto mb-4"
        {...props}
      >
        {children}
      </pre>
    ),
    a: ({ children, ...props }: { children?: React.ReactNode }) => (
      <a
        className="text-primary hover:underline"
        {...props}
      >
        {children}
      </a>
    ),
    hr: ({ ...props }) => (
      <hr className="my-8 border-border" {...props} />
    ),
    table: ({ children, ...props }: { children?: React.ReactNode }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse border border-border" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: { children?: React.ReactNode }) => (
      <thead className="bg-muted" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: { children?: React.ReactNode }) => (
      <tbody {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: { children?: React.ReactNode }) => (
      <tr className="border-b border-border" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: { children?: React.ReactNode }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: { children?: React.ReactNode }) => (
      <td className="border border-border px-4 py-2 text-foreground" {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}

