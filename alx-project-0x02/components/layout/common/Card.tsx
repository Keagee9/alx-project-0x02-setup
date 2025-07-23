// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces'; // Import the CardProps interface

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm w-full transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-700 text-base">{content}</p>
    </div>
  );
};

export default Card;
