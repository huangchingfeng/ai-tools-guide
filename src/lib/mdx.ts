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
    } as TutorialMeta;
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
    } as TutorialMeta,
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
