import { type CardProps } from '@/interfaces';
export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
