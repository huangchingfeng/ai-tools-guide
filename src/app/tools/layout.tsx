import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 工具列表',
  description: '探索 70+ 款 AI 工具，包含對話 AI、圖像生成、影片製作、程式開發等分類，來自美國、中國、日本、韓國、台灣的最佳 AI 工具推薦。',
  openGraph: {
    title: 'AI 工具列表 | AI 工具學習指南',
    description: '探索 70+ 款全球 AI 工具，依分類和地區篩選找到最適合你的工具',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
