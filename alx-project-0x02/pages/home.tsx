// pages/home.tsx
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Card from '../components/common/Card'; // Import the new Card component
import { CardProps } from '@/components/common/Card'; // Import the CardProps interface

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center bg-green-100 p-8">
        <h1 className="text-5xl font-bold text-green-800 mb-10">
          Welcome to the Home Page!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Our Mission"
            content="To provide high-quality education and foster innovation among our students."
          />
          <Card
            title="Our Vision"
            content="To be a leading institution in technology and professional development."
          />
          <Card
            title="Programs Offered"
            content="Explore our diverse range of programs in software engineering, data science, and more."
          />
          <Card
            title="Student Success"
            content="We are dedicated to the success of our students, offering support and resources."
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALX Project 2</p>
      </footer>
    </div>
  );
};

export default HomePage;
