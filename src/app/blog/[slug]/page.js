import { getPostData, getSortedPosts } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="flex max-w-5xl flex-col p-6">
      <div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/blog">
          <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
