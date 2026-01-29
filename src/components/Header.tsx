'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import FavoriteButton from './FavoriteButton';
import { getAllTools } from '@/data/tools';

export default function Header() {
  const pathname = usePathname();
  const tools = getAllTools();

  const isActive = (path: string) => {
    if (path === '/tools') return pathname.startsWith('/tools') && !pathname.startsWith('/compare');
    if (path === '/tutorials') return pathname.startsWith('/tutorials');
    if (path === '/compare') return pathname.startsWith('/compare');
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 px-6 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
          🤖 AI 工具指南
        </Link>

        <div className="hidden flex-1 max-w-md md:block">
          <SearchBar tools={tools} />
        </div>

        <nav className="flex items-center gap-4">
          <Link
            href="/tools"
            className={`hidden text-sm font-medium transition-colors sm:block ${
              isActive('/tools')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            工具列表
          </Link>
          <Link
            href="/tutorials"
            className={`hidden text-sm font-medium transition-colors sm:block ${
              isActive('/tutorials')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            教學文章
          </Link>
          <Link
            href="/compare"
            className={`hidden text-sm font-medium transition-colors sm:block ${
              isActive('/compare')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            工具比較
          </Link>
          <FavoriteButton />
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="mt-3 flex items-center gap-4 sm:hidden">
        <Link
          href="/tools"
          className={`text-sm font-medium ${
            isActive('/tools')
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          工具列表
        </Link>
        <Link
          href="/tutorials"
          className={`text-sm font-medium ${
            isActive('/tutorials')
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          教學文章
        </Link>
        <Link
          href="/compare"
          className={`text-sm font-medium ${
            isActive('/compare')
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          工具比較
        </Link>
      </div>

      {/* Mobile Search */}
      <div className="mt-3 md:hidden">
        <SearchBar tools={tools} />
      </div>
    </header>
  );
}
