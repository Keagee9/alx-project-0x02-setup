// pages/index.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';
import { WelcomeProps } from '../interfaces';

const Home: React.FC<WelcomeProps> = ({ message }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Welcome to ALX Project 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800">
          {message}
        </h1>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALX Project 2</p>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      message: "Welcome to ALX Project 2!",
    },
  };
}

export default Home;