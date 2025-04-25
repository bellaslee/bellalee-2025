import ImageGallery from '@/app/_components/image-gallery';
import Navigation from '@/app/_components/navigation';

const galleryImages = [
  {
    id: 4,
    src: '/img/home/241224jayce.jpg',
    alt: 'Illustration of Jayce from Arcane.',
    width: 500,
    height: 353,
  },
  {
    id: 3,
    src: '/img/posts/umwelt/thumbnail.png',
    alt: 'Preview image for Umwelt project.',
    link: '/blog/posts/umwelt',
    width: 450,
    height: 300,
  },
  {
    id: 2,
    src: '/img/posts/giiive/thumbnail.jpeg',
    alt: 'Preview image for Giiive project.',
    link: '/blog/posts/giiive',
    width: 496,
    height: 310,
  },
  {
    id: 1,
    src: '/img/posts/batober-2024/10.jpeg',
    alt: 'Illustration of Batman following the prompt "Nightmare".',
    width: 384,
    height: 308,
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
