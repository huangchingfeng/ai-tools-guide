import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              🤖 AI 工具指南
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              彙整全球 AI 工具資源，提供詳細教學與比較，讓你輕鬆上手各種 AI 應用。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              快速連結
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  工具列表
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  教學文章
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  工具比較
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  我的收藏
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              工具分類
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools?category=chatbot" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  對話 AI
                </Link>
              </li>
              <li>
                <Link href="/tools?category=image" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  圖像生成
                </Link>
              </li>
              <li>
                <Link href="/tools?category=video" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  影片生成
                </Link>
              </li>
              <li>
                <Link href="/tools?category=coding" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  程式開發
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              地區工具
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools?region=us" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  🇺🇸 美國工具
                </Link>
              </li>
              <li>
                <Link href="/tools?region=cn" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  🇨🇳 中國工具
                </Link>
              </li>
              <li>
                <Link href="/tools?region=jp" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  🇯🇵 日本工具
                </Link>
              </li>
              <li>
                <Link href="/tools?region=tw" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  🇹🇼 台灣工具
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} AI 工具學習指南. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-500">
              Made with ❤️ for AI learners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
