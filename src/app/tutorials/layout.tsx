import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教學文章',
  description: '從入門到進階的 AI 工具教學文章，手把手教你使用 ChatGPT、Claude、Midjourney、Gemini 等熱門 AI 工具。',
  openGraph: {
    title: '教學文章 | AI 工具學習指南',
    description: '從入門到進階的 AI 工具教學文章，讓你輕鬆上手各種 AI 應用',
  },
};

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
