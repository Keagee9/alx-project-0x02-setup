// components/common/PostCard.tsx
import React from 'react';
import Link from 'next/link';
import { type PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({
  userId,
  title,
  author,
  date,
  excerpt,
}) => {
  return (
    <article
      className="
        bg-white
        rounded-xl
        shadow-lg
        hover:shadow-xl
        p-8
        max-w-sm
        w-full
        transition-all
        duration-300
        transform
        hover:scale-105
      "
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2 break-words">
        {title}
      </h2>
      <div className="text-sm text-gray-500 mb-4">
        <Link href={`/users/${userId}`} className="hover:underline">
          By {author}
        </Link>
        <span className="mx-2">|</span>
        <span>{date}</span>
      </div>
      <p className="text-gray-700 text-base leading-relaxed break-words">
        {excerpt}
      </p>
    </article>
  );
};

export default PostCard;