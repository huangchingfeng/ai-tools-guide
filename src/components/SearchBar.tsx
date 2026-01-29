'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AITool } from '@/types';

interface SearchBarProps {
  tools: AITool[];
}

export default function SearchBar({ tools }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<AITool[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchQuery) ||
        tool.description.toLowerCase().includes(searchQuery) ||
        tool.features?.some((f) => f.toLowerCase().includes(searchQuery))
    );
    setResults(filtered.slice(0, 5));
  }, [query, tools]);

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
          className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-10 text-sm transition-colors focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-white shadow-lg">
          {results.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block border-b last:border-b-0 p-3 hover:bg-gray-50"
            >
              <div className="font-medium text-gray-900">{tool.name}</div>
              <div className="text-sm text-gray-500 line-clamp-1">
                {tool.description}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-white p-4 text-center shadow-lg">
          <span className="text-gray-500">找不到符合的工具</span>
        </div>
      )}
    </div>
  );
}
