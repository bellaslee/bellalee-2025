import Links from '@/app/_components/links';

export default function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-4">
      <h1>
        <Links href="/">bellalee</Links>
      </h1>
      <ul>
        <li>
          <Links href="/">home</Links>
        </li>
        <li>
          <Links href="/about">about</Links>
        </li>
        <li>
          <Links href="/blog">blog</Links>
        </li>
        <li>
          <Links href="https://garden.bellalee.com">digital garden</Links>
        </li>
      </ul>
    </nav>
  );
}
