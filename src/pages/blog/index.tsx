import { GetStaticProps } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    if (!data.title) {
      console.warn(`Missing title in file: ${filename}`);
      return null;
    }

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || 'Untitled',
      date: data.date || 'Unknown date',
    };
  }).filter(Boolean); // Eltávolítjuk a null értékeket

  return {
    props: {
      posts,
    },
  };
};
