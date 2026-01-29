'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import EmptyState from '@/components/EmptyState';
import { useFavorites } from '@/components/FavoritesProvider';
import { getAllTools } from '@/data/tools';
import { AITool } from '@/types';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const tools = getAllTools();

  const favoriteTools = useMemo(() => {
    return favorites
      .map(id => tools.find(t => t.id === id))
      .filter((t): t is AITool => t !== undefined);
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
                  href={`/compare?tools=${favoriteTools.slice(0, 4).map(t => t.id).join(',')}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  比較收藏的工具
                </Link>
              )}
            </div>

            {/* 工具列表 */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            icon="💝"
            title="還沒有收藏任何工具"
            description="瀏覽工具列表，點擊愛心圖示即可加入收藏"
            actionLabel="瀏覽所有工具"
            actionHref="/tools"
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
