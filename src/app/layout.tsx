import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-tools-guide.vercel.app'),
  title: {
    default: "AI 工具學習指南 | 探索 70+ 款 AI 工具資源",
    template: "%s | AI 工具學習指南",
  },
  description: "彙整美國、中國、日本、韓國、台灣 70+ 款 AI 工具資源，提供詳細教學與比較，讓你輕鬆上手 ChatGPT、Claude、Midjourney 等 AI 應用！",
  keywords: [
    "AI 工具", "ChatGPT", "Claude", "Midjourney", "AI 教學", "人工智慧",
    "Gemini", "Cursor", "Perplexity", "AI 比較", "AI 入門",
    "雅婷逐字稿", "Suno AI", "HeyGen", "AI 繪圖", "AI 寫作",
  ],
  authors: [{ name: "AI 工具學習指南" }],
  creator: "AI 工具學習指南",
  openGraph: {
    title: "AI 工具學習指南 | 探索 70+ 款 AI 工具",
    description: "彙整全球 AI 工具資源，提供詳細教學與比較，讓你輕鬆上手各種 AI 應用！",
    type: "website",
    locale: "zh_TW",
    siteName: "AI 工具學習指南",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 工具學習指南",
    description: "探索 70+ 款全球 AI 工具，從入門到進階一站搞定",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
