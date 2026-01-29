# AI 工具學習指南網站 - 完整實作計劃

> **For Claude:** 按照此計劃逐步執行任務，完成整個網站開發。

**Goal:** 完成一個展示各國 AI 工具的教學網站，包含工具資料庫、MDX 教學系統、搜尋功能、美化 UI，並部署到 Vercel。

**Architecture:** Next.js 16 App Router + MDX 內容管理 + Tailwind CSS 樣式系統。使用靜態生成 (SSG) 優化 SEO，工具資料存放在 TypeScript 檔案中便於維護。

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, MDX, Vercel

---

## Phase 1: 擴充工具資料庫 (20+ 工具)

### Task 1.1: 新增對話 AI 工具

**Files:**
- Modify: `src/data/tools.ts`

**Step 1: 新增更多對話 AI 工具**

在 `tools` 陣列中新增以下工具：

```typescript
// 新增到 tools 陣列
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
```

**Step 2: 確認檔案語法正確**

Run: `cd ~/ai-tools-guide && npx tsc --noEmit`

---

### Task 1.2: 新增圖像/影片生成工具

**Files:**
- Modify: `src/data/tools.ts`

**Step 1: 新增圖像與影片工具**

```typescript
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
```

---

### Task 1.3: 新增程式開發與生產力工具

**Files:**
- Modify: `src/data/tools.ts`

**Step 1: 新增開發與生產力工具**

```typescript
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
```

**Step 2: 確認語法正確並測試**

Run: `cd ~/ai-tools-guide && npm run build`

---

## Phase 2: MDX 教學內容系統

### Task 2.1: 安裝 MDX 相關套件

**Files:**
- Modify: `package.json`

**Step 1: 安裝 next-mdx-remote**

Run: `cd ~/ai-tools-guide && npm install next-mdx-remote gray-matter`

**Step 2: 驗證安裝**

Run: `cd ~/ai-tools-guide && npm ls next-mdx-remote`

---

### Task 2.2: 建立 MDX 工具函式

**Files:**
- Create: `src/lib/mdx.ts`

**Step 1: 建立 MDX 處理函式**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const TUTORIALS_PATH = path.join(process.cwd(), 'content/tutorials');

export interface TutorialMeta {
  slug: string;
  title: string;
  description: string;
  toolId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: string;
  date: string;
  author?: string;
}

// 取得所有教學文章的 metadata
export function getAllTutorials(): TutorialMeta[] {
  if (!fs.existsSync(TUTORIALS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(TUTORIALS_PATH).filter(f => f.endsWith('.mdx'));

  const tutorials = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(TUTORIALS_PATH, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      toolId: data.toolId || '',
      difficulty: data.difficulty || 'beginner',
      readTime: data.readTime || '5 分鐘',
      date: data.date || new Date().toISOString(),
      author: data.author,
    };
  });

  return tutorials.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 取得單篇教學文章
export function getTutorialBySlug(slug: string) {
  const filePath = path.join(TUTORIALS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || '',
      toolId: data.toolId || '',
      difficulty: data.difficulty || 'beginner',
      readTime: data.readTime || '5 分鐘',
      date: data.date || new Date().toISOString(),
      author: data.author,
    },
    content,
  };
}

// 取得所有 slugs (用於靜態生成)
export function getAllTutorialSlugs(): string[] {
  if (!fs.existsSync(TUTORIALS_PATH)) {
    return [];
  }

  return fs
    .readdirSync(TUTORIALS_PATH)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
}
```

---

### Task 2.3: 建立範例教學文章

**Files:**
- Create: `content/tutorials/chatgpt-beginner.mdx`

**Step 1: 建立 ChatGPT 入門教學**

```mdx
---
title: ChatGPT 新手入門完全指南
description: 從註冊帳號到進階技巧，手把手教你成為 ChatGPT 高手
toolId: chatgpt
difficulty: beginner
readTime: 15 分鐘
date: 2025-01-29
author: AI 工具學習指南
---

# ChatGPT 新手入門完全指南

ChatGPT 是目前最受歡迎的 AI 對話工具，本教學將帶你從零開始學習如何使用。

## 第一步：註冊帳號

1. 前往 [chat.openai.com](https://chat.openai.com)
2. 點擊「Sign up」按鈕
3. 選擇使用 Email、Google 或 Microsoft 帳號註冊
4. 完成驗證後即可開始使用

> **小提示：** 建議使用 Google 帳號註冊，登入更方便！

## 第二步：認識介面

ChatGPT 的介面非常簡潔：

- **左側欄**：歷史對話紀錄
- **中間區域**：對話視窗
- **底部輸入框**：輸入你的問題

## 第三步：開始第一次對話

試著輸入以下問題：

```
請用簡單的方式解釋什麼是人工智慧
```

ChatGPT 會給你一個詳細的回答。你可以繼續追問，它會記得對話的上下文。

## 進階技巧：如何寫好提示詞

好的提示詞（Prompt）能得到更好的回答：

### 1. 說明角色
```
你是一位有 10 年經驗的行銷專家，請幫我...
```

### 2. 給予背景
```
我是一家販售手工皂的小店老闆，目標客群是 25-40 歲的女性...
```

### 3. 指定格式
```
請用表格的方式呈現，包含優缺點比較
```

### 4. 分步驟要求
```
請分成三個步驟來說明...
```

## 常見問題

**Q: ChatGPT 免費版有什麼限制？**

免費版可以使用 GPT-4o mini 模型，對於一般使用已經足夠。Plus 訂閱（$20/月）可使用更強大的 GPT-4o 模型。

**Q: ChatGPT 會記住我之前說過的話嗎？**

在同一個對話中會記住，但新開一個對話就不會記得了。

## 下一步

恭喜你完成入門教學！接下來可以嘗試：

- 用 ChatGPT 幫你寫 Email
- 請它幫你做資料整理
- 學習更進階的提示詞技巧

---

**相關資源：**
- [OpenAI 官方文件](https://platform.openai.com/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai)
```

---

### Task 2.4: 建立 MDX 元件

**Files:**
- Create: `src/components/mdx/index.tsx`

**Step 1: 建立 MDX 自訂元件**

```tsx
import React from 'react';

// 提示框元件
export function Callout({
  children,
  type = 'info'
}: {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'tip'
}) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    tip: 'bg-green-50 border-green-200 text-green-800',
  };

  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    tip: '💡',
  };

  return (
    <div className={`my-4 rounded-lg border p-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

// 步驟元件
export function Step({
  number,
  title,
  children
}: {
  number: number;
  title: string;
  children: React.ReactNode
}) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="ml-11 text-gray-600">{children}</div>
    </div>
  );
}

// 程式碼區塊樣式
export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
      <code>{children}</code>
    </pre>
  );
}

// MDX 元件映射
export const mdxComponents = {
  Callout,
  Step,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-4 text-3xl font-bold text-gray-900" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-7 text-gray-600" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-gray-600" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-600" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-4 border-l-4 border-blue-500 bg-blue-50 py-2 pl-4 italic text-gray-700" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100" {...props} />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
};
```

---

### Task 2.5: 更新教學列表頁面

**Files:**
- Modify: `src/app/tutorials/page.tsx`

**Step 1: 使用 MDX 資料渲染教學列表**

```tsx
import Link from 'next/link';
import { getAllTutorials } from '@/lib/mdx';
import { getToolById } from '@/data/tools';

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const difficultyLabels = {
    beginner: '入門',
    intermediate: '進階',
    advanced: '專家',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            🤖 AI 工具學習指南
          </Link>
          <nav className="flex gap-6">
            <Link href="/tools" className="text-gray-600 hover:text-gray-900">
              工具列表
            </Link>
            <Link href="/tutorials" className="font-medium text-blue-600">
              教學文章
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">📚 教學文章</h1>
          <p className="text-gray-600">
            一步步的教學指南，從入門到進階，讓你輕鬆掌握各種 AI 工具
          </p>
        </div>

        {/* Tutorial List */}
        {tutorials.length > 0 ? (
          <div className="space-y-4">
            {tutorials.map((tutorial) => {
              const tool = getToolById(tutorial.toolId);
              return (
                <Link
                  key={tutorial.slug}
                  href={`/tutorials/${tutorial.slug}`}
                  className="block"
                >
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          {tool && (
                            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                              {tool.name}
                            </span>
                          )}
                          <span className={`rounded px-2 py-0.5 text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
                            {difficultyLabels[tutorial.difficulty]}
                          </span>
                          <span className="text-xs text-gray-500">
                            ⏱️ {tutorial.readTime}
                          </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                          {tutorial.title}
                        </h2>
                        <p className="text-gray-600">{tutorial.description}</p>
                      </div>
                      <span className="ml-4 text-gray-400 group-hover:text-blue-600">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">教學文章準備中</h3>
            <p className="text-gray-600">
              我們正在努力編寫高品質的教學內容，敬請期待！
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
```

---

### Task 2.6: 建立教學詳情頁

**Files:**
- Create: `src/app/tutorials/[slug]/page.tsx`

**Step 1: 建立動態路由頁面**

```tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getTutorialBySlug, getAllTutorialSlugs } from '@/lib/mdx';
import { getToolById } from '@/data/tools';
import { mdxComponents } from '@/components/mdx';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTutorialSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const { meta, content } = tutorial;
  const tool = getToolById(meta.toolId);

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const difficultyLabels = {
    beginner: '入門',
    intermediate: '進階',
    advanced: '專家',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            🤖 AI 工具學習指南
          </Link>
          <nav className="flex gap-6">
            <Link href="/tools" className="text-gray-600 hover:text-gray-900">
              工具列表
            </Link>
            <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">
              教學文章
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">首頁</Link>
          <span className="mx-2">/</span>
          <Link href="/tutorials" className="hover:text-gray-700">教學文章</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{meta.title}</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8 rounded-xl border bg-white p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {tool && (
              <Link
                href={`/tools/${tool.id}`}
                className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 hover:bg-blue-200"
              >
                {tool.name}
              </Link>
            )}
            <span className={`rounded px-3 py-1 text-sm font-medium ${difficultyColors[meta.difficulty]}`}>
              {difficultyLabels[meta.difficulty]}
            </span>
            <span className="text-sm text-gray-500">⏱️ {meta.readTime}</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{meta.title}</h1>
          <p className="text-lg text-gray-600">{meta.description}</p>
          {meta.author && (
            <p className="mt-4 text-sm text-gray-500">
              作者：{meta.author} | {new Date(meta.date).toLocaleDateString('zh-TW')}
            </p>
          )}
        </div>

        {/* Article Content */}
        <article className="rounded-xl border bg-white p-8">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/tutorials"
            className="text-blue-600 hover:underline"
          >
            ← 返回教學列表
          </Link>
          {tool && (
            <Link
              href={`/tools/${tool.id}`}
              className="text-blue-600 hover:underline"
            >
              查看 {tool.name} 工具介紹 →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
```

---

## Phase 3: 搜尋功能

### Task 3.1: 建立搜尋元件

**Files:**
- Create: `src/components/SearchBar.tsx`

**Step 1: 建立搜尋輸入元件**

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AITool } from '@/types';

interface SearchBarProps {
  tools: AITool[];
}

export default function SearchBar({ tools }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<AITool[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchQuery) ||
        tool.description.toLowerCase().includes(searchQuery) ||
        tool.features?.some((f) => f.toLowerCase().includes(searchQuery))
    );
    setResults(filtered.slice(0, 5));
  }, [query, tools]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 快捷鍵 Cmd/Ctrl + K
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="搜尋工具... (⌘K)"
          className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-10 text-sm transition-colors focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-white shadow-lg">
          {results.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block border-b last:border-b-0 p-3 hover:bg-gray-50"
            >
              <div className="font-medium text-gray-900">{tool.name}</div>
              <div className="text-sm text-gray-500 line-clamp-1">
                {tool.description}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-white p-4 text-center shadow-lg">
          <span className="text-gray-500">找不到符合的工具</span>
        </div>
      )}
    </div>
  );
}
```

---

### Task 3.2: 整合搜尋到 Header

**Files:**
- Create: `src/components/Header.tsx`

**Step 1: 建立共用 Header 元件**

```tsx
import Link from 'next/link';
import SearchBar from './SearchBar';
import { getAllTools } from '@/data/tools';

export default function Header() {
  const tools = getAllTools();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 px-6 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0 text-xl font-bold text-gray-900">
          🤖 AI 工具指南
        </Link>

        <div className="hidden flex-1 max-w-md md:block">
          <SearchBar tools={tools} />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/tools"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            工具列表
          </Link>
          <Link
            href="/tutorials"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            教學文章
          </Link>
        </nav>
      </div>
    </header>
  );
}
```

---

## Phase 4: UI 美化

### Task 4.1: 更新全域樣式

**Files:**
- Modify: `src/app/globals.css`

**Step 1: 加入自訂樣式**

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 自訂滾動條 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Line clamp */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 動畫 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* 卡片 hover 效果 */
.card-hover {
  transition: all 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

---

### Task 4.2: 更新首頁設計

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: 美化首頁**

```tsx
import Link from 'next/link';
import { getAllTools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';

export default function Home() {
  const tools = getAllTools();
  const featuredTools = tools.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            探索 <span className="text-blue-600">AI 工具</span> 的世界
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            彙整美國、中國、日本、韓國的最新 AI 工具資源，
            提供一步步的教學，讓你輕鬆上手各種 AI 應用！
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="w-full rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              🔍 探索 AI 工具
            </Link>
            <Link
              href="/tutorials"
              className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              📚 開始學習
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-white px-6 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: `${tools.length}+`, label: 'AI 工具', color: 'text-blue-600' },
            { value: '6', label: '地區資源', color: 'text-green-600' },
            { value: '8', label: '工具分類', color: 'text-purple-600' },
            { value: '免費', label: '完全開放', color: 'text-orange-600' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">🔥 熱門工具</h2>
              <p className="mt-2 text-gray-600">最受歡迎的 AI 工具推薦</p>
            </div>
            <Link
              href="/tools"
              className="hidden text-blue-600 hover:underline sm:block"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools" className="text-blue-600 hover:underline">
              查看全部工具 →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            📂 工具分類
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '💬', name: '對話 AI', desc: 'ChatGPT、Claude、Gemini', category: 'chatbot', color: 'hover:border-blue-300' },
              { icon: '🎨', name: '圖像生成', desc: 'Midjourney、DALL-E、SD', category: 'image', color: 'hover:border-pink-300' },
              { icon: '🎬', name: '影片生成', desc: 'Runway、Pika、可靈', category: 'video', color: 'hover:border-purple-300' },
              { icon: '💻', name: '程式開發', desc: 'Cursor、Copilot、v0', category: 'coding', color: 'hover:border-green-300' },
            ].map((item) => (
              <Link
                key={item.category}
                href={`/tools?category=${item.category}`}
                className={`card-hover rounded-xl border-2 border-transparent bg-white p-6 text-center shadow-sm ${item.color}`}
              >
                <div className="mb-3 text-5xl">{item.icon}</div>
                <div className="text-lg font-bold text-gray-900">{item.name}</div>
                <div className="mt-1 text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            🌍 各地區 AI 發展
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { flag: '🇺🇸', name: '美國', desc: 'OpenAI、Google、Anthropic', region: 'us' },
              { flag: '🇨🇳', name: '中國', desc: '字節、百度、阿里、月之暗面', region: 'cn' },
              { flag: '🇯🇵', name: '日本', desc: 'LINE、Sony、NEC', region: 'jp' },
              { flag: '🇰🇷', name: '韓國', desc: '三星、Naver、Kakao', region: 'kr' },
            ].map((item) => (
              <Link
                key={item.region}
                href={`/tools?region=${item.region}`}
                className="card-hover rounded-xl border bg-white p-6 text-center"
              >
                <div className="mb-3 text-5xl">{item.flag}</div>
                <div className="text-lg font-bold text-gray-900">{item.name}</div>
                <div className="mt-1 text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">準備好開始了嗎？</h2>
          <p className="mb-8 text-blue-100">
            從入門教學開始，一步步學會使用各種 AI 工具
          </p>
          <Link
            href="/tutorials"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50"
          >
            📚 查看教學文章
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          <p>© 2025 AI 工具學習指南 | 持續更新中</p>
          <p className="mt-2">
            Made with ❤️ for AI learners
          </p>
        </div>
      </footer>
    </div>
  );
}
```

---

## Phase 5: 部署到 Vercel

### Task 5.1: 初始化 Git

**Files:**
- Create: `.gitignore` (已存在)

**Step 1: 初始化 Git 並提交**

Run:
```bash
cd ~/ai-tools-guide
git init
git add .
git commit -m "feat: initial commit - AI tools guide website"
```

---

### Task 5.2: 建立 GitHub Repository

**Step 1: 在 GitHub 建立新 repo**

Run:
```bash
cd ~/ai-tools-guide
gh repo create ai-tools-guide --public --source=. --remote=origin --push
```

---

### Task 5.3: 部署到 Vercel

**Step 1: 安裝 Vercel CLI**

Run: `npm install -g vercel`

**Step 2: 部署專案**

Run:
```bash
cd ~/ai-tools-guide
vercel --prod
```

**Step 3: 確認部署成功**

部署完成後會得到一個 URL，例如 `https://ai-tools-guide.vercel.app`

---

## 完成清單

- [ ] Phase 1: 擴充工具資料庫 (20+ 工具)
  - [ ] Task 1.1: 新增對話 AI 工具
  - [ ] Task 1.2: 新增圖像/影片生成工具
  - [ ] Task 1.3: 新增程式開發與生產力工具
- [ ] Phase 2: MDX 教學內容系統
  - [ ] Task 2.1: 安裝 MDX 相關套件
  - [ ] Task 2.2: 建立 MDX 工具函式
  - [ ] Task 2.3: 建立範例教學文章
  - [ ] Task 2.4: 建立 MDX 元件
  - [ ] Task 2.5: 更新教學列表頁面
  - [ ] Task 2.6: 建立教學詳情頁
- [ ] Phase 3: 搜尋功能
  - [ ] Task 3.1: 建立搜尋元件
  - [ ] Task 3.2: 整合搜尋到 Header
- [ ] Phase 4: UI 美化
  - [ ] Task 4.1: 更新全域樣式
  - [ ] Task 4.2: 更新首頁設計
- [ ] Phase 5: 部署到 Vercel
  - [ ] Task 5.1: 初始化 Git
  - [ ] Task 5.2: 建立 GitHub Repository
  - [ ] Task 5.3: 部署到 Vercel
