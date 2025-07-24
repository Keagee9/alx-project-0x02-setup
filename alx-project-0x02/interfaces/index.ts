// interfaces/index.ts

export interface ButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  shape: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostCardProps {
  userId: number;
  title:string;
  author: string;
  date: string;
  excerpt: string;
}

export interface WelcomeProps {
  message: string;
}