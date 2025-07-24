// pages/about.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Page</title>
        <meta name="description" content="Learn more about us" />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center bg-purple-100 p-8">
        <h1 className="text-5xl font-bold text-purple-800 mb-6">
          About Us
        </h1>
        <Button label="Contact Us" size="large" shape="rounded-md" />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALX Project 2</p>
      </footer>
    </div>
  );
};

export default AboutPage;