import Link from 'next/link';
import { getAllTutorials } from '@/lib/mdx';
import { getToolById } from '@/data/tools';

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

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
            <Link href="/tutorials" className="text-sm font-medium text-blue-600">
              教學文章
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">📚 教學文章</h1>
          <p className="text-gray-600">
            一步步的教學指南，從入門到進階，讓你輕鬆掌握各種 AI 工具
          </p>
        </div>

        {/* Tutorial List */}
        {tutorials.length > 0 ? (
          <div className="space-y-4">
            {tutorials.map((tutorial) => {
              const tool = getToolById(tutorial.toolId);
              return (
                <Link
                  key={tutorial.slug}
                  href={`/tutorials/${tutorial.slug}`}
                  className="block"
                >
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          {tool && (
                            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                              {tool.name}
                            </span>
                          )}
                          <span className={`rounded px-2 py-0.5 text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
                            {difficultyLabels[tutorial.difficulty]}
                          </span>
                          <span className="text-xs text-gray-500">
                            ⏱️ {tutorial.readTime}
                          </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                          {tutorial.title}
                        </h2>
                        <p className="text-gray-600">{tutorial.description}</p>
                      </div>
                      <span className="ml-4 text-gray-400 group-hover:text-blue-600">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">教學文章準備中</h3>
            <p className="text-gray-600">
              我們正在努力編寫高品質的教學內容，敬請期待！
            </p>
          </div>
        )}

        {/* Coming Soon */}
        <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
          <div className="mb-2 text-2xl">🚀</div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">更多教學持續更新中</h3>
          <p className="text-sm text-gray-600">
            我們會定期新增各種 AI 工具的教學文章
          </p>
        </div>
      </main>
    </div>
  );
}
