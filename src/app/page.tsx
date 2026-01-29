import Link from 'next/link';
import { getAllTools } from '@/data/tools';
import { getAllTutorials } from '@/lib/mdx';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';

export default function Home() {
  const tools = getAllTools();
  const tutorials = getAllTutorials();
  const featuredTools = tools.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl animate-slide-up">
          <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 收錄 {tools.length}+ 個 AI 工具
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            探索 <span className="text-blue-600">AI 工具</span> 的世界
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            彙整美國、中國、日本、韓國的最新 AI 工具資源，
            提供一步步的教學，讓你輕鬆上手各種 AI 應用！
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="w-full rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 sm:w-auto"
            >
              🔍 探索 AI 工具
            </Link>
            <Link
              href="/tutorials"
              className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              📚 開始學習
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-white px-6 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: `${tools.length}+`, label: 'AI 工具', color: 'text-blue-600', bg: 'bg-blue-50' },
            { value: '6', label: '地區資源', color: 'text-green-600', bg: 'bg-green-50' },
            { value: '8', label: '工具分類', color: 'text-purple-600', bg: 'bg-purple-50' },
            { value: `${tutorials.length}`, label: '教學文章', color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg}`}>
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">🔥 熱門工具</h2>
              <p className="mt-2 text-gray-600">最受歡迎的 AI 工具推薦</p>
            </div>
            <Link
              href="/tools"
              className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:block"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools" className="text-blue-600 hover:underline">
              查看全部工具 →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            📂 工具分類
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '💬', name: '對話 AI', desc: 'ChatGPT、Claude、Gemini', category: 'chatbot', gradient: 'from-blue-500 to-cyan-500' },
              { icon: '🎨', name: '圖像生成', desc: 'Midjourney、DALL-E、SD', category: 'image', gradient: 'from-pink-500 to-rose-500' },
              { icon: '🎬', name: '影片生成', desc: 'Runway、Pika、可靈', category: 'video', gradient: 'from-purple-500 to-indigo-500' },
              { icon: '💻', name: '程式開發', desc: 'Cursor、Copilot、v0', category: 'coding', gradient: 'from-green-500 to-emerald-500' },
              { icon: '🎵', name: '音訊/語音', desc: 'Suno、ElevenLabs', category: 'audio', gradient: 'from-orange-500 to-amber-500' },
              { icon: '✍️', name: '寫作輔助', desc: 'Notion AI、Jasper', category: 'writing', gradient: 'from-teal-500 to-cyan-500' },
              { icon: '📊', name: '生產力', desc: 'Gamma、Canva AI', category: 'productivity', gradient: 'from-violet-500 to-purple-500' },
              { icon: '🌐', name: '全部工具', desc: '探索所有 AI 工具', category: 'all', gradient: 'from-gray-600 to-gray-700' },
            ].map((item) => (
              <Link
                key={item.category}
                href={item.category === 'all' ? '/tools' : `/tools?category=${item.category}`}
                className="card-hover group relative overflow-hidden rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-5`} />
                <div className="mb-3 text-4xl">{item.icon}</div>
                <div className="text-lg font-bold text-gray-900">{item.name}</div>
                <div className="mt-1 text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            🌍 各地區 AI 發展
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { flag: '🇺🇸', name: '美國', desc: 'OpenAI、Google、Anthropic', region: 'us', color: 'border-blue-200 hover:border-blue-400' },
              { flag: '🇨🇳', name: '中國', desc: '字節、百度、阿里、月之暗面', region: 'cn', color: 'border-red-200 hover:border-red-400' },
              { flag: '🇯🇵', name: '日本', desc: 'LINE、Sony、NEC', region: 'jp', color: 'border-pink-200 hover:border-pink-400' },
              { flag: '🇰🇷', name: '韓國', desc: '三星、Naver、Kakao', region: 'kr', color: 'border-purple-200 hover:border-purple-400' },
            ].map((item) => (
              <Link
                key={item.region}
                href={`/tools?region=${item.region}`}
                className={`card-hover rounded-xl border-2 bg-white p-6 text-center transition-colors ${item.color}`}
              >
                <div className="mb-3 text-5xl">{item.flag}</div>
                <div className="text-lg font-bold text-gray-900">{item.name}</div>
                <div className="mt-1 text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tutorials */}
      {tutorials.length > 0 && (
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">📚 最新教學</h2>
                <p className="mt-2 text-gray-600">一步步帶你學會使用 AI 工具</p>
              </div>
              <Link
                href="/tutorials"
                className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:block"
              >
                查看全部 →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {tutorials.slice(0, 3).map((tutorial) => (
                <Link
                  key={tutorial.slug}
                  href={`/tutorials/${tutorial.slug}`}
                  className="card-hover rounded-xl border bg-white p-6"
                >
                  <div className="mb-2 text-sm text-gray-500">⏱️ {tutorial.readTime}</div>
                  <h3 className="mb-2 font-bold text-gray-900">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{tutorial.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">準備好開始了嗎？</h2>
          <p className="mb-8 text-blue-100">
            從入門教學開始，一步步學會使用各種 AI 工具
          </p>
          <Link
            href="/tutorials"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5"
          >
            📚 查看教學文章
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <div className="text-xl font-bold text-gray-900">🤖 AI 工具學習指南</div>
              <p className="mt-1 text-sm text-gray-500">讓每個人都能輕鬆使用 AI</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/tools" className="hover:text-gray-900">工具列表</Link>
              <Link href="/tutorials" className="hover:text-gray-900">教學文章</Link>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>© 2025 AI 工具學習指南 | Made with ❤️ for AI learners</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
