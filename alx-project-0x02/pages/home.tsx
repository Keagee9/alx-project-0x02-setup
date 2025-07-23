// pages/home.tsx
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Head>

      <Header />

      <main className="flex-grow flex items-center justify-center bg-green-100">
        <h1 className="text-5xl font-bold text-green-800">
          Welcome to the Home Page!
        </h1>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALX Project 2</p>
      </footer>
    </div>
  );
};

export default HomePage;