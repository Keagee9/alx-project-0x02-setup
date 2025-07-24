// components/common/Card.tsx
import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-lg
        hover:shadow-xl
        p-8
        m-4
        max-w-sm
        w-full
        transition-all
        duration-300
        transform
        hover:scale-105
        flex flex-col
        justify-between
      "
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4 break-words">
        {title}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed break-words">
        {content}
      </p>
    </div>
  );
};

export default Card;
