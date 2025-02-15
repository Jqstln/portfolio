import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import strip from 'strip-markdown';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract first 100 characters of plain text content
      const plainTextContent = remark().use(strip).processSync(content).toString();
      const description = plainTextContent.split('\n').filter(Boolean)[0]?.slice(0, 100) || '';

      return {
        slug: fileName.replace('.md', ''),
        description,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostData(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}
