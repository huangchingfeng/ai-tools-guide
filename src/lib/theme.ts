// 難度顏色配置
export const difficultyColors = {
  beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
} as const;

// 分類顏色配置
export const categoryColors: Record<string, string> = {
  chatbot: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  image: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  video: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  audio: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  coding: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  writing: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  productivity: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  other: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
} as const;

// 地區 emoji
export const regionEmojis: Record<string, string> = {
  us: '🇺🇸',
  cn: '🇨🇳',
  jp: '🇯🇵',
  kr: '🇰🇷',
  tw: '🇹🇼',
  global: '🌍',
} as const;
