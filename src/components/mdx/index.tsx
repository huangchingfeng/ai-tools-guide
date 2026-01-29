import React from 'react';

// 提示框元件
export function Callout({
  children,
  type = 'info'
}: {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'tip'
}) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    tip: 'bg-green-50 border-green-200 text-green-800',
  };

  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    tip: '💡',
  };

  return (
    <div className={`my-4 rounded-lg border p-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

// 步驟元件
export function Step({
  number,
  title,
  children
}: {
  number: number;
  title: string;
  children: React.ReactNode
}) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="ml-11 text-gray-600">{children}</div>
    </div>
  );
}

// MDX 元件映射
export const mdxComponents = {
  Callout,
  Step,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-4 text-3xl font-bold text-gray-900" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900 border-b pb-2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-7 text-gray-600" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-gray-600" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-600" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-4 border-l-4 border-blue-500 bg-blue-50 py-2 pl-4 italic text-gray-700" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100" {...props} />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-t px-4 py-2 text-sm text-gray-600" {...props} />
  ),
};
