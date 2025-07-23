export interface CardProps {
  title: string;
  content: string;
  imageUrl?: string; // Optional: for future image support
  onClick?: () => void; // Optional: for interactivity
}

export interface ButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

// interfaces/index.ts
export interface WelcomeProps {
  message: string;
}