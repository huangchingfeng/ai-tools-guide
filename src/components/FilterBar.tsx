'use client';

import { categoryLabels, regionLabels, ToolCategory, Region } from '@/types';

interface FilterBarProps {
  selectedCategory: string;
  selectedRegion: string;
  onCategoryChange: (category: string) => void;
  onRegionChange: (region: string) => void;
}

export default function FilterBar({
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange,
}: FilterBarProps) {
  const categories = Object.entries(categoryLabels);
  const regions = Object.entries(regionLabels);

  return (
    <div className="mb-8 space-y-4">
      {/* 分類篩選 */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">工具分類</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部
          </button>
          {categories.map(([value, label]) => (
            <button
              key={value}
              onClick={() => onCategoryChange(value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 地區篩選 */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">地區來源</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onRegionChange('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedRegion === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🌍 全部
          </button>
          {regions.map(([value, label]) => (
            <button
              key={value}
              onClick={() => onRegionChange(value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedRegion === value
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
