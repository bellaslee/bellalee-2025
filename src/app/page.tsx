import ImageGallery from '@/components/image-gallery';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/placeholder.svg?height=400&width=300&text=Image 1',
    alt: 'Gallery Image 1',
    link: '/page1',
    width: 100,
    height: 100,
  },
  {
    id: 2,
    src: '/placeholder.svg?height=400&width=300&text=Image 2',
    alt: 'Gallery Image 2',
    link: '/page2',
    width: 100,
    height: 100,
  },
  {
    id: 3,
    src: '/placeholder.svg?height=400&width=300&text=Image 3',
    alt: 'Gallery Image 3',
    link: '/page3',
    width: 100,
    height: 100,
  },
  {
    id: 4,
    src: '/placeholder.svg?height=400&width=300&text=Image 4',
    alt: 'Gallery Image 4',
    link: '/page4',
    width: 100,
    height: 100,
  },
  {
    id: 5,
    src: '/placeholder.svg?height=400&width=300&text=Image 5',
    alt: 'Gallery Image 5',
    link: '/page5',
    width: 100,
    height: 100,
  },
  // Add more images as needed
];

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">bellalee</h1>
      <div className="w-full">
        <ImageGallery images={galleryImages} />
      </div>
    </main>
  );
}
