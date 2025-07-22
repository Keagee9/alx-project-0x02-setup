import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navLinkClasses = (path: string) => {
    const baseClasses = "text-gray-700 hover:text-blue-500 transition-colors";
    const activeClasses = "text-blue-600 font-semibold";
    return router.pathname === path ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <header className="bg-gray-100 shadow-md p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">SoloForge</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className={navLinkClasses('/home')}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={navLinkClasses('/about')}>About</Link>
          </li>
          <li>
            <Link href="/posts" className={navLinkClasses('/posts')}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
