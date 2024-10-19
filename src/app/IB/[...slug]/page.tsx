import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { notFound } from 'next/navigation'; // Use for 404 handling
import Notes from '@/components/Notes/Notes';
import slugify from 'slugify';

const contentDir = path.join(process.cwd(), 'src', 'content', 'IB');

const getMarkdownFilePath = (slug: string[]): string => {
  return path.join(contentDir, `${slug.join('/')}.md`);
};

const getMarkdownContent = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return matter(fileContent).content; 
};

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const filePath = getMarkdownFilePath(params.slug);

  const content = getMarkdownContent(filePath);

  if (!content) {
    notFound();
  }

  return (
    <div>
      <Notes>{content}</Notes>
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const getFiles = (dir: string): string[] => {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    return files.reduce((allFiles: string[], file) => {
      const res = path.join(dir, file.name);
      if (file.isDirectory()) {
        return allFiles.concat(getFiles(res)); 
      } else {
        return allFiles.concat(res);
      }
    }, []);
  };

  const files = getFiles(contentDir);

  return files.map((file) => {
    const slug = file
      .replace(contentDir, '')
      .replace(/\.md$/, '')
      .split(path.sep)
      .filter(Boolean)
      .map((part) => slugify(part, { lower: true }));

    return { slug };
  });
}
