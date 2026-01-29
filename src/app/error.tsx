'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 可選：記錄錯誤到錯誤追蹤服務
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6" role="img" aria-label="錯誤">
          😵
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          糟糕，出了點問題
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          頁面載入時發生錯誤，請嘗試重新整理或返回首頁。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            重試
          </button>
          <a
            href="/"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            返回首頁
          </a>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-600">
            錯誤代碼: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
