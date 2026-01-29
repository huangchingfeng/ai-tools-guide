'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import { getAllTools } from '@/data/tools';

export default function Header() {
  const pathname = usePathname();
  const tools = getAllTools();

  const isActive = (path: string) => {
    if (path === '/tools') return pathname.startsWith('/tools');
    if (path === '/tutorials') return pathname.startsWith('/tutorials');
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 px-6 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0 text-xl font-bold text-gray-900">
          🤖 AI 工具指南
        </Link>

        <div className="hidden flex-1 max-w-md md:block">
          <SearchBar tools={tools} />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/tools"
            className={`text-sm font-medium transition-colors ${
              isActive('/tools') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            工具列表
          </Link>
          <Link
            href="/tutorials"
            className={`text-sm font-medium transition-colors ${
              isActive('/tutorials') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            教學文章
          </Link>
        </nav>
      </div>

      {/* Mobile Search */}
      <div className="mt-3 md:hidden">
        <SearchBar tools={tools} />
      </div>
    </header>
  );
}
