import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-4">
      <h1>
        <Link href="/">bellalee</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
}
