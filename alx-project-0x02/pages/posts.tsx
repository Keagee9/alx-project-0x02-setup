import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostCardProps } from '@/interfaces';
import Head from 'next/head';

// We extend PostCardProps to include an `id` for the key prop
interface PostsPageProps {
  posts: (PostCardProps & { id: number })[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Browse our latest collection of posts." />
      </Head>
      <Header />
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Blog Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                title={post.title}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetching posts and users from a placeholder API
  const [postsRes, usersRes] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ]);

  const postsData = await postsRes.json();
  const usersData = await usersRes.json();

  // Creating a map of userId to user name for easy lookup
  const userMap = new Map(usersData.map((user: any) => [user.id, user.name]));

  // Processing posts to match the props required by PostCard
  const posts = postsData.map((post: any) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    author: userMap.get(post.userId) || 'Unknown Author',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    excerpt: `${post.body.substring(0, 100)}...`,
  }));

  return {
    props: {
      posts,
    },
  };
}
