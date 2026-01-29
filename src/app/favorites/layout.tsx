import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '我的收藏',
  description: '管理你收藏的 AI 工具，快速存取常用工具，支援工具比較功能。',
  robots: {
    index: false,
    follow: true,
  },
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
