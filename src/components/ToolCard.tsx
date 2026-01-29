import Link from 'next/link';
import { AITool, categoryLabels, regionLabels, difficultyLabels } from '@/types';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
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

  return (
    <Link href={`/tools/${tool.id}`}>
      <div className="card-hover group h-full rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {tool.name}
          </h3>
          <span className="text-lg">{regionLabels[tool.region].split(' ')[0]}</span>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
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
                className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600"
              >
                {feature}
              </span>
            ))}
            {tool.features.length > 3 && (
              <span className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-500">
                +{tool.features.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4 text-sm">
          <span className="text-gray-500">💰 {tool.pricing || '免費'}</span>
          <span className="text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
            查看詳情 →
          </span>
        </div>
      </div>
    </Link>
  );
}
