import ImageGallery from '@/app/_components/image-gallery';
import Navigation from '@/app/_components/navigation';

const galleryImages = [
  {
    id: 4,
    src: '/img/home/241224jayce.jpg',
    alt: 'Digital illustration of Jayce from Arcane.',
    width: 450,
    height: 317.7,
  },
  {
    id: 7,
    src: '/img/posts/info-capstone/bus-ad.jpg',
    alt: 'Bus ad mockup with the headline, "There\'s SPACE for women in STEM".',
    link: '/projects/info-capstone',
    width: 500,
    height: 353,
  },
  {
    id: 5,
    src: '/img/home/moon_skyscraper.jpg',
    alt: 'Moon over a skyscraper in downtown Seattle.',
    width: 300,
    height: 450,
  },
  {
    id: 8,
    src: '/img/posts/datathon-2023/thumbnail.jpeg',
    alt: 'Preview image for datathon project.',
    link: '/blog/datathon-2023',
    width: 400,
    height: 250,
  },
  {
    id: 3,
    src: '/img/posts/umwelt/thumbnail.png',
    alt: 'Preview image for Umwelt project.',
    link: 'https://umwelt.vercel.app/',
    width: 450,
    height: 300,
  },
  {
    id: 2,
    src: '/img/posts/giiive/thumbnail.jpeg',
    alt: 'Preview image for Giiive project.',
    link: '/projects/giiive',
    width: 496,
    height: 310,
  },
  {
    id: 1,
    src: '/img/posts/batober-2024/10.jpeg',
    alt: 'Ink drawing of Batman following the prompt "Nightmare".',
    width: 384,
    height: 308,
  },
  {
    id: 6,
    src: '/img/home/IMG_8782.JPG',
    alt: 'The Taipei city light rail, shot on film as I left home for the first time to the US for college.',
    width: 500,
    height: 331,
  },
];

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="w-full">
        <ImageGallery images={galleryImages} />
      </div>
    </main>
  );
}
