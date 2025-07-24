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

export interface UserCardProps {
  id: number;
  name: string;
  email: string;
  website: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  website: string;
  address: Address;
}

export interface WelcomeProps {
  message: string;
}