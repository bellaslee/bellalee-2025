import Navigation from '@/app/_components/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="w-1/2 mt-20">
        <h2>Hi, I'm Bella! I'm a consultant, designer, artist, and writer.</h2>
        <p>
          My dream is to make information more intuitive, accessible, and
          enjoyable by bridging the gap between people and technology.
        </p>
        <p>
          Everyone has a story to tell. I strive to understand, empathize with,
          and incorporate people’s diverse voices and experiences as the
          foundation for a good information experience.
        </p>
        <p>
          See a glimpse of my world in{' '}
          <a href="https://garden.bellalee.com">my digital garden</a> or view
          more polished works <Link href="/blog">on my blog</Link> :)
        </p>
      </div>
    </main>
  );
}
