import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "AI 工具學習指南 | 探索各國 AI 工具資源",
  description: "彙整美國、中國、日本、韓國的 AI 工具資源，提供一步步的教學，讓你輕鬆上手各種 AI 應用！",
  keywords: ["AI 工具", "ChatGPT", "Claude", "Midjourney", "AI 教學", "人工智慧"],
  openGraph: {
    title: "AI 工具學習指南",
    description: "探索各國 AI 工具，學習 AI 應用",
    type: "website",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
