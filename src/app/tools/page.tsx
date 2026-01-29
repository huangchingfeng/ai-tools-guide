'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllTools } from '@/data/tools';
import { categoryLabels, regionLabels } from '@/types';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';

function ToolsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialRegion = searchParams.get('region') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);

  const allTools = getAllTools();

  const filteredTools = useMemo(() => {
    return allTools.filter((tool) => {
      const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
      const regionMatch = selectedRegion === 'all' || tool.region === selectedRegion;
      return categoryMatch && regionMatch;
    });
  }, [allTools, selectedCategory, selectedRegion]);

  const categories = Object.entries(categoryLabels);
  const regions = Object.entries(regionLabels);

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">🛠️ AI 工具列表</h1>
        <p className="text-gray-600">
          探索 {allTools.length}+ 個 AI 工具，依分類和地區篩選找到適合你的工具
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4 rounded-xl border bg-white p-6">
        {/* Category Filter */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-700">工具分類</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全部
            </button>
            {categories.map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSelectedCategory(value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-700">地區來源</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedRegion === 'all'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🌍 全部
            </button>
            {regions.map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSelectedRegion(value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedRegion === value
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedCategory !== 'all' || selectedRegion !== 'all') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedRegion('all');
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            清除所有篩選條件
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          找到 <span className="font-semibold text-gray-900">{filteredTools.length}</span> 個工具
        </p>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <div className="mb-4 text-5xl">🔍</div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">沒有找到符合條件的工具</h3>
          <p className="mb-4 text-gray-600">
            試著調整篩選條件，或瀏覽全部工具
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedRegion('all');
            }}
            className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            清除篩選條件
          </button>
        </div>
      )}
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-8">
        <div className="mb-2 h-9 w-48 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-96 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="mb-8 rounded-xl border bg-white p-6">
        <div className="h-24 animate-pulse rounded bg-gray-100" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 animate-pulse rounded-xl bg-gray-200" />
        ))}
      </div>
    </main>
  );
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <ToolsContent />
      </Suspense>
    </div>
  );
}
