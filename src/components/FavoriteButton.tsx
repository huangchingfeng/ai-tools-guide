'use client';

import Link from 'next/link';
import { useFavorites } from './FavoritesProvider';

export default function FavoriteButton() {
  const { favorites } = useFavorites();

  return (
    <Link
      href="/favorites"
      className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      title="我的收藏"
    >
      <svg
        className="h-5 w-5"
        fill={favorites.length > 0 ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={favorites.length > 0 ? 0 : 2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {favorites.length > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {favorites.length > 9 ? '9+' : favorites.length}
        </span>
      )}
    </Link>
  );
}
