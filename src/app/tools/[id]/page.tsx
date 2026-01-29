import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getToolById, getAllTools } from '@/data/tools';
import { categoryLabels, regionLabels, difficultyLabels } from '@/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

// 靜態生成所有工具頁面
export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({ id: tool.id }));
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) {
    notFound();
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            🤖 AI 工具學習指南
          </Link>
          <nav className="flex gap-6">
            <Link href="/tools" className="text-gray-600 hover:text-gray-900">
              工具列表
            </Link>
            <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">
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
          <Link href="/tools" className="hover:text-gray-700">工具列表</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{tool.name}</span>
        </nav>

        {/* Tool Header */}
        <div className="mb-8 rounded-xl border bg-white p-8">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-gray-900">{tool.name}</h1>
              <p className="text-lg text-gray-600">{tool.description}</p>
            </div>
            <span className="text-2xl">{regionLabels[tool.region]}</span>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
              {categoryLabels[tool.category]}
            </span>
            <span className={`rounded-full px-4 py-1.5 text-sm font-medium ${difficultyColors[tool.difficulty]}`}>
              {difficultyLabels[tool.difficulty]}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              前往官網 →
            </a>
            <Link
              href={`/tutorials?tool=${tool.id}`}
              className="rounded-full border border-gray-300 bg-white px-6 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              查看教學
            </Link>
          </div>
        </div>

        {/* Features */}
        {tool.features && tool.features.length > 0 && (
          <div className="mb-8 rounded-xl border bg-white p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">✨ 主要功能</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {tool.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-lg bg-gray-50 p-3"
                >
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        {tool.pricing && (
          <div className="mb-8 rounded-xl border bg-white p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">💰 價格方案</h2>
            <p className="text-lg text-gray-700">{tool.pricing}</p>
          </div>
        )}

        {/* YouTubers */}
        {tool.youtubers && tool.youtubers.length > 0 && (
          <div className="mb-8 rounded-xl border bg-white p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">🎬 推薦 YouTuber</h2>
            <p className="mb-4 text-gray-600">這些創作者有介紹過這個工具：</p>
            <div className="space-y-3">
              {tool.youtubers.map((youtuber, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                  <div>
                    <span className="font-medium text-gray-900">{youtuber.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={youtuber.channel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700 transition-colors hover:bg-red-200"
                    >
                      頻道
                    </a>
                    {youtuber.videoUrl && (
                      <a
                        href={youtuber.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200"
                      >
                        教學影片
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/tools"
            className="text-blue-600 hover:underline"
          >
            ← 返回工具列表
          </Link>
        </div>
      </main>
    </div>
  );
}
