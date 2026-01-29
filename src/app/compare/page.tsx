'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllTools } from '@/data/tools';
import { AITool, categoryLabels, regionLabels, difficultyLabels } from '@/types';

function CompareContent() {
  const searchParams = useSearchParams();
  const tools = getAllTools();
  const [selectedTools, setSelectedTools] = useState<AITool[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 從 URL 參數初始化選中的工具
  useEffect(() => {
    const toolIds = searchParams.get('tools')?.split(',') || [];
    const selected = toolIds
      .map(id => tools.find(t => t.id === id))
      .filter((t): t is AITool => t !== undefined);
    setSelectedTools(selected);
  }, [searchParams, tools]);

  const filteredTools = tools.filter(
    tool =>
      !selectedTools.find(t => t.id === tool.id) &&
      (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addTool = (tool: AITool) => {
    if (selectedTools.length < 4) {
      const newSelected = [...selectedTools, tool];
      setSelectedTools(newSelected);
      // 更新 URL
      const params = new URLSearchParams();
      params.set('tools', newSelected.map(t => t.id).join(','));
      window.history.replaceState(null, '', `/compare?${params.toString()}`);
    }
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  const removeTool = (toolId: string) => {
    const newSelected = selectedTools.filter(t => t.id !== toolId);
    setSelectedTools(newSelected);
    // 更新 URL
    const params = new URLSearchParams();
    if (newSelected.length > 0) {
      params.set('tools', newSelected.map(t => t.id).join(','));
      window.history.replaceState(null, '', `/compare?${params.toString()}`);
    } else {
      window.history.replaceState(null, '', '/compare');
    }
  };

  const popularComparisons = [
    { tools: ['chatgpt', 'claude', 'gemini'], label: 'ChatGPT vs Claude vs Gemini' },
    { tools: ['midjourney', 'dalle', 'stable-diffusion'], label: 'Midjourney vs DALL-E vs SD' },
    { tools: ['cursor', 'github-copilot', 'codeium'], label: 'Cursor vs Copilot vs Codeium' },
    { tools: ['suno', 'udio'], label: 'Suno vs Udio' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            AI 工具比較
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            選擇最多 4 個工具進行功能比較，幫助你做出最佳選擇
          </p>
        </div>

        {/* 熱門比較 */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            熱門比較
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularComparisons.map(({ tools: toolIds, label }) => (
              <Link
                key={label}
                href={`/compare?tools=${toolIds.join(',')}`}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* 工具選擇器 */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            選擇要比較的工具
          </h2>

          {/* 已選工具 */}
          <div className="mb-4 flex flex-wrap gap-2">
            {selectedTools.map(tool => (
              <span
                key={tool.id}
                className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tool.name}
                <button
                  onClick={() => removeTool(tool.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </span>
            ))}
            {selectedTools.length === 0 && (
              <span className="text-gray-500 dark:text-gray-400">
                尚未選擇工具
              </span>
            )}
          </div>

          {/* 搜尋框 */}
          {selectedTools.length < 4 && (
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋工具名稱..."
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />

              {/* 下拉選單 */}
              {isDropdownOpen && searchQuery && (
                <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-64 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {filteredTools.slice(0, 10).map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => addTool(tool)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {tool.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {categoryLabels[tool.category]} · {regionLabels[tool.region]}
                        </div>
                      </div>
                    </button>
                  ))}
                  {filteredTools.length === 0 && (
                    <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
                      找不到符合的工具
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 比較表格 */}
        {selectedTools.length >= 2 && (
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    比較項目
                  </th>
                  {selectedTools.map(tool => (
                    <th
                      key={tool.id}
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      <Link
                        href={`/tools/${tool.id}`}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {tool.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 分類 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    分類
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {categoryLabels[tool.category]}
                    </td>
                  ))}
                </tr>

                {/* 地區 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    地區
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {regionLabels[tool.region]}
                    </td>
                  ))}
                </tr>

                {/* 難度 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    難度
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          tool.difficulty === 'beginner'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : tool.difficulty === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {difficultyLabels[tool.difficulty]}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* 價格 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    價格
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {tool.pricing || '未提供'}
                    </td>
                  ))}
                </tr>

                {/* 功能特色 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    主要功能
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      <ul className="space-y-1">
                        {tool.features?.map((feature, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <span className="text-green-500">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* 說明 */}
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    說明
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {tool.description}
                    </td>
                  ))}
                </tr>

                {/* 官網 */}
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    官網
                  </td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="px-6 py-4 text-sm">
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        前往官網 →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* 提示：至少選 2 個 */}
        {selectedTools.length < 2 && (
          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-4 text-4xl">⚖️</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              請選擇至少 2 個工具
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              在上方搜尋框輸入工具名稱，或點擊熱門比較快速開始
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-48 rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="h-64 rounded-xl bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CompareContent />
    </Suspense>
  );
}
