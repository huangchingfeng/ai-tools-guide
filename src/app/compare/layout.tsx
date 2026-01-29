import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '工具比較',
  description: '比較不同 AI 工具的功能、價格與特色，幫助你選擇最適合的 AI 工具。支援 ChatGPT、Claude、Gemini、Midjourney 等工具對比。',
  openGraph: {
    title: '工具比較 | AI 工具學習指南',
    description: '比較 AI 工具的功能、價格與特色，做出最佳選擇',
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
