import Link from 'next/link';
import Image from 'next/image';
import { getSortedPosts } from '@/lib/markdown';

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="p-6 text-center">
      <h1 className="mb-6 text-6xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-xl text-gray-400">No blog posts available...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ slug, title, date, image, description }) => (
            <div
              key={slug}
              className="max-w-md overflow-hidden rounded-lg bg-gradient-to-tl from-gray-800 to-neutral-900 p-4 shadow-lg"
            >
              <Image
                src={image || '/favicon/favicon.ico'}
                alt={title}
                width={500}
                height={300}
                className="h-48 w-full rounded-lg object-cover"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="mb-2 text-sm text-gray-400">{date}</p>
                <p className="mb-4 text-gray-300">{description}...</p>
                <Link href={`/blog/${slug}`} className="font-semibold text-sky-400">
                  Read more ➡️
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10">
        <Link href="/">
          <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
