'use client';

import Link from 'next/link';
import { AITool, categoryLabels, regionLabels, difficultyLabels } from '@/types';
import { useFavorites } from './FavoritesProvider';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(tool.id);

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  };

  const categoryColors: Record<string, string> = {
    chatbot: 'bg-blue-100 text-blue-700',
    image: 'bg-pink-100 text-pink-700',
    video: 'bg-purple-100 text-purple-700',
    audio: 'bg-orange-100 text-orange-700',
    coding: 'bg-green-100 text-green-700',
    writing: 'bg-teal-100 text-teal-700',
    productivity: 'bg-indigo-100 text-indigo-700',
    other: 'bg-gray-100 text-gray-700',
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool.id);
  };

  return (
    <Link href={`/tools/${tool.id}`}>
      <div className="card-hover group relative h-full rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-600">
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute right-4 top-4 z-10 rounded-full p-2 transition-all ${
            favorited
              ? 'bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400'
              : 'bg-gray-100 text-gray-400 opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700'
          }`}
          title={favorited ? '取消收藏' : '加入收藏'}
        >
          {favorited ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>

        {/* Header */}
        <div className="mb-3 flex items-start justify-between pr-10">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
            {tool.name}
          </h3>
          <span className="text-lg">{regionLabels[tool.region].split(' ')[0]}</span>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[tool.category] || categoryColors.other}`}>
            {categoryLabels[tool.category]}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${difficultyColors[tool.difficulty]}`}>
            {difficultyLabels[tool.difficulty]}
          </span>
        </div>

        {/* Features */}
        {tool.features && tool.features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tool.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {feature}
              </span>
            ))}
            {tool.features.length > 3 && (
              <span className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-500">
                +{tool.features.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-sm dark:border-gray-700">
          <span className="text-gray-500 dark:text-gray-400">💰 {tool.pricing || '免費'}</span>
          <span className="text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400">
            查看詳情 →
          </span>
        </div>
      </div>
    </Link>
  );
}
