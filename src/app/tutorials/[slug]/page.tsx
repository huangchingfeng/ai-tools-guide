import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getTutorialBySlug, getAllTutorialSlugs } from '@/lib/mdx';
import { getToolById } from '@/data/tools';
import { mdxComponents } from '@/components/mdx';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTutorialSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const { meta, content } = tutorial;
  const tool = getToolById(meta.toolId);

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const difficultyLabels = {
    beginner: '入門',
    intermediate: '進階',
    advanced: '專家',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 px-6 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            🤖 AI 工具指南
          </Link>
          <nav className="flex gap-6">
            <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              工具列表
            </Link>
            <Link href="/tutorials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              教學文章
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">首頁</Link>
          <span className="mx-2">/</span>
          <Link href="/tutorials" className="hover:text-gray-700">教學文章</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{meta.title}</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8 rounded-xl border bg-white p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {tool && (
              <Link
                href={`/tools/${tool.id}`}
                className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 hover:bg-blue-200"
              >
                {tool.name}
              </Link>
            )}
            <span className={`rounded px-3 py-1 text-sm font-medium ${difficultyColors[meta.difficulty]}`}>
              {difficultyLabels[meta.difficulty]}
            </span>
            <span className="text-sm text-gray-500">⏱️ {meta.readTime}</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{meta.title}</h1>
          <p className="text-lg text-gray-600">{meta.description}</p>
          {meta.author && (
            <p className="mt-4 text-sm text-gray-500">
              作者：{meta.author} | {new Date(meta.date).toLocaleDateString('zh-TW')}
            </p>
          )}
        </div>

        {/* Article Content */}
        <article className="rounded-xl border bg-white p-8">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/tutorials"
            className="text-blue-600 hover:underline"
          >
            ← 返回教學列表
          </Link>
          {tool && (
            <Link
              href={`/tools/${tool.id}`}
              className="text-blue-600 hover:underline"
            >
              查看 {tool.name} 工具介紹 →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
