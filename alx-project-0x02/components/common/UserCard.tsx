// components/common/UserCard.tsx
import React from 'react';
import Link from 'next/link';
import { type UserCardProps } from '@/interfaces';

const UserCard: React.FC<UserCardProps> = ({ id, name, email, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 mt-2">{email}</p>
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-1 inline-block"
        >
          {website}
        </a>
      </div>
      <div className="mt-6">
        <Link
          href={`/users/${id}`}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          View Profile &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UserCard;