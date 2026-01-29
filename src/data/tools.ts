import { AITool } from '@/types';

// AI 工具資料庫
export const tools: AITool[] = [
  // ===== 對話 AI =====
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI 開發的對話式 AI，支援文字對話、程式碼生成、文件分析等多種功能。',
    category: 'chatbot',
    region: 'us',
    website: 'https://chat.openai.com',
    features: ['文字對話', '程式碼生成', '文件分析', '圖片生成 (DALL-E)', '網路搜尋'],
    pricing: '免費版 / Plus $20/月',
    difficulty: 'beginner',
    youtubers: [
      { name: 'PAPAYA 電腦教室', channel: 'https://youtube.com/@papaborsen' },
      { name: '阿峰老師', channel: 'https://youtube.com/@aifengge' },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic 開發的 AI 助手，擅長長文分析、程式開發、以及複雜推理任務。',
    category: 'chatbot',
    region: 'us',
    website: 'https://claude.ai',
    features: ['長文分析', '程式開發', '複雜推理', '文件處理', 'Artifacts 視覺化'],
    pricing: '免費版 / Pro $20/月',
    difficulty: 'beginner',
    youtubers: [
      { name: '阿峰老師', channel: 'https://youtube.com/@aifengge' },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google 推出的多模態 AI，支援文字、圖片、程式碼等多種輸入。',
    category: 'chatbot',
    region: 'us',
    website: 'https://gemini.google.com',
    features: ['多模態輸入', '即時搜尋', 'Google 整合', '程式碼執行'],
    pricing: '免費版 / Advanced $20/月',
    difficulty: 'beginner',
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    description: 'Microsoft 推出的 AI 助手，整合 Bing 搜尋與 Office 365。',
    category: 'chatbot',
    region: 'us',
    website: 'https://copilot.microsoft.com',
    features: ['Bing 搜尋整合', 'Office 整合', '圖片生成', '免費使用'],
    pricing: '免費 / Pro $20/月',
    difficulty: 'beginner',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI 搜尋引擎，每個回答都附上來源引用，適合研究使用。',
    category: 'chatbot',
    region: 'us',
    website: 'https://perplexity.ai',
    features: ['來源引用', '即時搜尋', '學術研究', 'Pro Search'],
    pricing: '免費版 / Pro $20/月',
    difficulty: 'beginner',
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Quora 推出的 AI 聊天平台，可存取多個 AI 模型。',
    category: 'chatbot',
    region: 'us',
    website: 'https://poe.com',
    features: ['多模型存取', '自訂機器人', '免費額度'],
    pricing: '免費版 / 訂閱制',
    difficulty: 'beginner',
  },
  {
    id: 'doubao',
    name: '豆包',
    description: '字節跳動推出的 AI 助手，支援繁體中文，適合中文使用者。',
    category: 'chatbot',
    region: 'cn',
    website: 'https://www.doubao.com',
    features: ['中文對話', '寫作輔助', '問答'],
    pricing: '免費',
    difficulty: 'beginner',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    description: '月之暗面開發的 AI 助手，支援超長文本處理，最高 200 萬字。',
    category: 'chatbot',
    region: 'cn',
    website: 'https://kimi.moonshot.cn',
    features: ['超長文本', '文件分析', '中文優化'],
    pricing: '免費',
    difficulty: 'beginner',
  },
  {
    id: 'qianwen',
    name: '通義千問',
    description: '阿里巴巴推出的大型語言模型，中文能力強大。',
    category: 'chatbot',
    region: 'cn',
    website: 'https://tongyi.aliyun.com',
    features: ['中文優化', '長文理解', '程式碼生成', '圖片理解'],
    pricing: '免費',
    difficulty: 'beginner',
  },
  {
    id: 'ernie',
    name: '文心一言',
    description: '百度推出的 AI 對話助手，深度整合百度生態系統。',
    category: 'chatbot',
    region: 'cn',
    website: 'https://yiyan.baidu.com',
    features: ['中文對話', '百度整合', '圖片生成', '文件處理'],
    pricing: '免費',
    difficulty: 'beginner',
  },

  // ===== 圖像生成 =====
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '強大的 AI 圖像生成工具，透過 Discord 使用，擅長藝術風格圖像創作。',
    category: 'image',
    region: 'us',
    website: 'https://midjourney.com',
    features: ['藝術風格圖像', '高品質輸出', '風格調整', '圖片混合'],
    pricing: '$10/月起',
    difficulty: 'intermediate',
    youtubers: [
      { name: '六角學院', channel: 'https://youtube.com/@hexschool' },
    ],
  },
  {
    id: 'dalle',
    name: 'DALL-E 3',
    description: 'OpenAI 的圖像生成模型，透過 ChatGPT Plus 使用。',
    category: 'image',
    region: 'us',
    website: 'https://openai.com/dall-e-3',
    features: ['高品質圖像', '文字理解強', '自然語言提示'],
    pricing: 'ChatGPT Plus 內含',
    difficulty: 'beginner',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: '擅長生成含有文字的圖片，文字渲染品質極高。',
    category: 'image',
    region: 'us',
    website: 'https://ideogram.ai',
    features: ['文字渲染', '免費額度', '高品質輸出'],
    pricing: '免費版 / Pro 方案',
    difficulty: 'beginner',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: '開源的 AI 圖像生成模型，可本地部署，高度客製化。',
    category: 'image',
    region: 'global',
    website: 'https://stability.ai',
    features: ['開源免費', '本地部署', '高度客製化', 'LoRA 微調'],
    pricing: '免費 (開源)',
    difficulty: 'advanced',
  },

  // ===== 影片生成 =====
  {
    id: 'runway',
    name: 'Runway Gen-3',
    description: '專業級 AI 影片生成工具，支援文字轉影片、圖片轉影片。',
    category: 'video',
    region: 'us',
    website: 'https://runwayml.com',
    features: ['文字轉影片', '圖片轉影片', '影片編輯', '動態筆刷'],
    pricing: '$12/月起',
    difficulty: 'intermediate',
  },
  {
    id: 'pika',
    name: 'Pika',
    description: '簡單易用的 AI 影片生成工具，適合新手入門。',
    category: 'video',
    region: 'us',
    website: 'https://pika.art',
    features: ['簡單介面', '快速生成', '免費試用'],
    pricing: '免費版 / Pro 方案',
    difficulty: 'beginner',
  },
  {
    id: 'kling',
    name: '可靈 AI',
    description: '快手推出的 AI 影片生成工具，支援長影片生成。',
    category: 'video',
    region: 'cn',
    website: 'https://kling.kuaishou.com',
    features: ['長影片生成', '高品質輸出', '中文優化'],
    pricing: '免費 / 付費方案',
    difficulty: 'intermediate',
  },

  // ===== 音訊/語音 =====
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI 音樂生成工具，輸入文字描述即可創作歌曲。',
    category: 'audio',
    region: 'us',
    website: 'https://suno.com',
    features: ['文字轉音樂', '歌詞生成', '多種風格'],
    pricing: '免費版 / Pro $10/月',
    difficulty: 'beginner',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: '頂級 AI 語音合成工具，支援多語言與聲音克隆。',
    category: 'audio',
    region: 'us',
    website: 'https://elevenlabs.io',
    features: ['語音合成', '聲音克隆', '多語言支援', 'API'],
    pricing: '免費版 / Pro 方案',
    difficulty: 'intermediate',
  },

  // ===== 程式開發 =====
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI 驅動的程式碼編輯器，內建 AI 對話與程式碼生成功能。',
    category: 'coding',
    region: 'us',
    website: 'https://cursor.com',
    features: ['AI 程式碼生成', '智慧補全', '程式碼解釋', '多檔案編輯'],
    pricing: '免費版 / Pro $20/月',
    difficulty: 'intermediate',
    youtubers: [
      { name: '阿峰老師', channel: 'https://youtube.com/@aifengge' },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'GitHub 與 OpenAI 合作的 AI 程式碼助手，支援多種 IDE。',
    category: 'coding',
    region: 'us',
    website: 'https://github.com/features/copilot',
    features: ['程式碼補全', '多語言支援', 'IDE 整合', 'Chat 功能'],
    pricing: '$10/月 或 $100/年',
    difficulty: 'intermediate',
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    description: 'Vercel 推出的 AI UI 生成工具，快速產生 React 元件。',
    category: 'coding',
    region: 'us',
    website: 'https://v0.dev',
    features: ['UI 生成', 'React/Next.js', 'Tailwind CSS', '即時預覽'],
    pricing: '免費版 / Pro 方案',
    difficulty: 'intermediate',
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    description: 'StackBlitz 推出的 AI 全端應用生成器，一鍵部署。',
    category: 'coding',
    region: 'us',
    website: 'https://bolt.new',
    features: ['全端應用', '即時預覽', '一鍵部署', '多框架支援'],
    pricing: '免費版 / Pro 方案',
    difficulty: 'intermediate',
  },

  // ===== 寫作輔助 =====
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Notion 內建的 AI 寫作助手，幫助整理筆記、撰寫文件。',
    category: 'writing',
    region: 'us',
    website: 'https://notion.so',
    features: ['寫作輔助', '摘要生成', '翻譯', '腦力激盪'],
    pricing: '$10/月 (加購)',
    difficulty: 'beginner',
  },

  // ===== 生產力工具 =====
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI 簡報生成工具，輸入主題即可產生精美簡報。',
    category: 'productivity',
    region: 'us',
    website: 'https://gamma.app',
    features: ['簡報生成', '文件生成', '網頁生成', '精美模板'],
    pricing: '免費版 / Pro $10/月',
    difficulty: 'beginner',
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Canva 內建的 AI 功能，包含圖片生成、魔術橡皮擦等。',
    category: 'productivity',
    region: 'global',
    website: 'https://canva.com',
    features: ['圖片生成', '背景移除', '魔術橡皮擦', '設計建議'],
    pricing: '免費版 / Pro $13/月',
    difficulty: 'beginner',
  },
];

// 取得所有工具
export function getAllTools(): AITool[] {
  return tools;
}

// 依 ID 取得工具
export function getToolById(id: string): AITool | undefined {
  return tools.find(tool => tool.id === id);
}

// 依分類篩選
export function getToolsByCategory(category: string): AITool[] {
  return tools.filter(tool => tool.category === category);
}

// 依地區篩選
export function getToolsByRegion(region: string): AITool[] {
  return tools.filter(tool => tool.region === region);
}

// 搜尋工具
export function searchTools(query: string): AITool[] {
  const searchQuery = query.toLowerCase();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.features?.some((f) => f.toLowerCase().includes(searchQuery))
  );
}
