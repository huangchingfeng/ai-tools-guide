'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { useFavorites } from '@/components/FavoritesProvider';
import { getAllTools } from '@/data/tools';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const tools = getAllTools();

  const favoriteTools = useMemo(() => {
    return favorites
      .map(id => tools.find(t => t.id === id))
      .filter(t => t !== undefined);
  }, [favorites, tools]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            我的收藏
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {favoriteTools.length > 0
              ? `已收藏 ${favoriteTools.length} 個工具`
              : '還沒有收藏任何工具'}
          </p>
        </div>

        {favoriteTools.length > 0 ? (
          <>
            {/* 快速操作 */}
            <div className="mb-6 flex flex-wrap gap-3">
              {favoriteTools.length >= 2 && (
                <Link
                  href={`/compare?tools=${favoriteTools.slice(0, 4).map(t => t!.id).join(',')}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  比較收藏的工具
                </Link>
              )}
            </div>

            {/* 工具列表 */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteTools.map(tool => tool && <ToolCard key={tool.id} tool={tool} />)}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-4 text-5xl">💝</div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              還沒有收藏任何工具
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              瀏覽工具列表，點擊愛心圖示即可加入收藏
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              瀏覽所有工具
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
