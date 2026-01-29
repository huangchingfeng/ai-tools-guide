'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { AITool } from '@/types';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchBarProps {
  tools: AITool[];
}

export default function SearchBar({ tools }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 防抖搜尋查詢
  const debouncedQuery = useDebounce(query, 200);

  // 計算搜尋結果（使用 useMemo 避免重複計算）
  const results = useMemo(() => {
    if (debouncedQuery.trim() === '') {
      return [];
    }

    const searchQuery = debouncedQuery.toLowerCase();
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchQuery) ||
        tool.description.toLowerCase().includes(searchQuery) ||
        tool.features?.some((f) => f.toLowerCase().includes(searchQuery))
    );
    return filtered.slice(0, 5);
  }, [debouncedQuery, tools]);

  // 處理點擊外部關閉
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 快捷鍵 Cmd/Ctrl + K
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="搜尋工具... (⌘K)"
          className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-10 text-sm transition-colors focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-600 dark:focus:bg-gray-800"
          aria-label="搜尋 AI 工具"
          aria-describedby="search-hint"
          aria-expanded={isOpen && (results.length > 0 || (!!query && results.length === 0))}
          aria-controls="search-results"
          role="combobox"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
          🔍
        </span>
        <span id="search-hint" className="sr-only">
          使用 Cmd+K 或 Ctrl+K 快速開啟搜尋
        </span>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          className="absolute top-full z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
          role="listbox"
        >
          {results.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              onClick={handleResultClick}
              className="block border-b border-gray-100 last:border-b-0 p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              role="option"
            >
              <div className="font-medium text-gray-900 dark:text-white">{tool.name}</div>
              <div className="text-sm text-gray-500 line-clamp-1 dark:text-gray-400">
                {tool.description}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && debouncedQuery && (
        <div
          id="search-results"
          className="absolute top-full z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white p-4 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
          role="status"
        >
          <span className="text-gray-500 dark:text-gray-400">找不到符合的工具</span>
        </div>
      )}
    </div>
  );
}
