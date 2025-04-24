'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  link: string;
  width: number; // Width in pixels
  height: number; // Height in pixels
};

type PositionedImage = GalleryImage & {
  position: { x: number; y: number };
  zIndex: number;
  rotation: number;
};

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const [positionedImages, setPositionedImages] = useState<PositionedImage[]>(
    []
  );
  const [draggedImage, setDraggedImage] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setContainerSize({ width: clientWidth, height: clientHeight });
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({ width: clientWidth, height: clientHeight });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      generateScatteredLayout();
    }
  }, [containerSize, images]);

  const generateScatteredLayout = () => {
    const { width, height } = containerSize;
    const imageCount = images.length;

    // Calculate total area and average image size for better grid estimation
    const totalImageArea = images.reduce(
      (sum, img) => sum + img.width * img.height,
      0
    );
    const avgImageArea = totalImageArea / imageCount;
    const avgImageSide = Math.sqrt(avgImageArea);

    // Determine grid dimensions based on image count and average size
    const gridCols = Math.ceil(Math.sqrt((imageCount * width) / height));
    const gridRows = Math.ceil(imageCount / gridCols);

    const cellWidth = width / gridCols;
    const cellHeight = height / gridRows;

    // Shuffle z-indices
    const zIndices = Array.from({ length: imageCount }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );

    const newPositionedImages: PositionedImage[] = images.map(
      (image, index) => {
        // Determine which grid cell this image belongs to
        const row = Math.floor(index / gridCols);
        const col = index % gridCols;

        // Base position at center of cell
        const baseX = col * cellWidth + cellWidth / 2;
        const baseY = row * cellHeight + cellHeight / 2;

        // Add randomness - up to 40% of cell size in any direction
        const randomX = baseX + (Math.random() * 0.8 - 0.4) * cellWidth;
        const randomY = baseY + (Math.random() * 0.8 - 0.4) * cellHeight;

        // Random rotation between -12 and 12 degrees
        const rotation = Math.random() * 24 - 12;

        return {
          ...image,
          position: {
            // Adjust for image size to keep within bounds
            x: Math.max(
              0,
              Math.min(width - image.width / 2, randomX - image.width / 2)
            ),
            y: Math.max(
              0,
              Math.min(height - image.height / 2, randomY - image.height / 2)
            ),
          },
          zIndex: zIndices[index],
          rotation: rotation,
        };
      }
    );

    setPositionedImages(newPositionedImages);
  };

  const handleDragStart = (e: React.DragEvent, id: number, index: number) => {
    e.dataTransfer.setData('text/plain', id.toString());

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setDraggedImage(id);

    setPositionedImages((prevImages) => {
      const newImages = [...prevImages];
      const maxZ = Math.max(...newImages.map((img) => img.zIndex));
      newImages[index].zIndex = maxZ + 1;
      return newImages;
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedImage === null || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    setPositionedImages((prevImages) =>
      prevImages.map((img) =>
        img.id === draggedImage
          ? { ...img, position: { x: newX, y: newY } }
          : img
      )
    );

    setDraggedImage(null);
  };

  const handleImageClick = (link: string, e: React.MouseEvent) => {
    if (draggedImage === null) {
      e.preventDefault();
      router.push(link);
    }
  };

  const handleImageMouseDown = (
    id: number,
    index: number,
    e: React.MouseEvent
  ) => {
    setPositionedImages((prevImages) => {
      const newImages = [...prevImages];
      const maxZ = Math.max(...newImages.map((img) => img.zIndex));
      if (newImages[index].zIndex < maxZ) {
        newImages[index].zIndex = maxZ + 1;
      }
      return newImages;
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {positionedImages.map((image, index) => (
        <div
          key={image.id}
          draggable
          onDragStart={(e) => handleDragStart(e, image.id, index)}
          onClick={(e) => handleImageClick(image.link, e)}
          onMouseDown={(e) => handleImageMouseDown(image.id, index, e)}
          className="absolute cursor-move transition-all duration-200 hover:shadow-xl"
          style={{
            left: `${image.position.x}px`,
            top: `${image.position.y}px`,
            zIndex: image.zIndex,
            transform: `rotate(${image.rotation}deg)`,
            transformOrigin: 'center center',
            width: `${image.width}px`,
            height: `${image.height}px`,
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden">
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
