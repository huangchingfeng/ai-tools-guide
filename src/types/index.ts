// AI 工具的資料型別
export interface AITool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  region: Region;
  website: string;
  logo?: string;
  youtubers?: YouTuber[];
  features?: string[];
  pricing?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// 工具分類
export type ToolCategory =
  | 'chatbot'      // 對話 AI
  | 'image'        // 圖像生成
  | 'video'        // 影片生成
  | 'audio'        // 音訊/語音
  | 'coding'       // 程式開發
  | 'writing'      // 寫作輔助
  | 'productivity' // 生產力工具
  | 'other';       // 其他

// 地區
export type Region = 'us' | 'cn' | 'jp' | 'kr' | 'tw' | 'global';

// 推薦的 YouTuber
export interface YouTuber {
  name: string;
  channel: string;
  videoUrl?: string;
}

// 教學文章
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  toolId: string;        // 關聯的工具
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: TutorialStep[];
  createdAt: string;
  updatedAt: string;
}

// 教學步驟
export interface TutorialStep {
  order: number;
  title: string;
  content: string;
  image?: string;
  tip?: string;
}

// 分類標籤顯示
export const categoryLabels: Record<ToolCategory, string> = {
  chatbot: '對話 AI',
  image: '圖像生成',
  video: '影片生成',
  audio: '音訊/語音',
  coding: '程式開發',
  writing: '寫作輔助',
  productivity: '生產力工具',
  other: '其他',
};

// 地區標籤顯示
export const regionLabels: Record<Region, string> = {
  us: '🇺🇸 美國',
  cn: '🇨🇳 中國',
  jp: '🇯🇵 日本',
  kr: '🇰🇷 韓國',
  tw: '🇹🇼 台灣',
  global: '🌍 全球',
};

// 難度標籤
export const difficultyLabels = {
  beginner: '入門',
  intermediate: '進階',
  advanced: '專家',
};
