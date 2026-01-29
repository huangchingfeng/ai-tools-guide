import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6 font-bold text-gray-200 dark:text-gray-800">
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          找不到頁面
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          你要找的頁面不存在或已被移動。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            返回首頁
          </Link>
          <Link
            href="/tools"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            瀏覽工具
          </Link>
        </div>
      </div>
    </div>
  );
}
