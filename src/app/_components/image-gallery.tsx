'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  link?: string;
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
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(
    null
  );
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Track mouse position for dragging
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Spotlight state
  const [spotlightImage, setSpotlightImage] = useState<PositionedImage | null>(
    null
  );

  // Measure container on mount and resize
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

  // Track mouse movement for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - containerRect.left,
          y: e.clientY - containerRect.top,
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);

        // Update the final position of the dragged image
        if (draggedImage !== null && draggedImageIndex !== null) {
          setPositionedImages((prevImages) =>
            prevImages.map((img, index) =>
              index === draggedImageIndex
                ? {
                    ...img,
                    position: {
                      x: mousePosition.x - dragOffset.x,
                      y: mousePosition.y - dragOffset.y,
                    },
                  }
                : img
            )
          );
        }

        setDraggedImage(null);
        setDraggedImageIndex(null);
      }
    };

    // Close spotlight on escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && spotlightImage) {
        setSpotlightImage(null);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    isDragging,
    draggedImage,
    draggedImageIndex,
    dragOffset,
    mousePosition,
    spotlightImage,
  ]);

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

        // Random rotation between -10 and 10 degrees
        const rotation = Math.random() * 20 - 10;

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

  const handleMouseDown = (e: React.MouseEvent, id: number, index: number) => {
    // Don't start dragging if we're in spotlight mode
    if (spotlightImage) return;

    e.preventDefault();

    // Calculate offset from mouse position to image top-left corner

    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragOffset({
      x: offsetX,
      y: offsetY,
    });

    // Set initial mouse position
    setMousePosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });

    setDraggedImage(id);
    setDraggedImageIndex(index);
    setIsDragging(true);

    // Update z-index to bring the dragged image to the front
    setPositionedImages((prevImages) => {
      const newImages = [...prevImages];
      const maxZ = Math.max(...newImages.map((img) => img.zIndex));
      newImages[index].zIndex = maxZ + 1;
      return newImages;
    });
  };

  const handleImageClick = (image: PositionedImage, e: React.MouseEvent) => {
    // Only handle click if not dragging
    if (!isDragging) {
      e.preventDefault();

      if (image.link) {
        // If image has a link, navigate to it
        router.push(image.link);
      } else {
        // If image doesn't have a link, open spotlight
        setSpotlightImage(image);
      }
    }
  };

  const closeSpotlight = () => {
    setSpotlightImage(null);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      {positionedImages.map((image, index) => {
        const isDraggingThis = isDragging && draggedImageIndex === index;

        return (
          <div
            key={image.id}
            onMouseDown={(e) => handleMouseDown(e, image.id, index)}
            onClick={(e) => handleImageClick(image, e)}
            className={`absolute cursor-move ${
              !isDragging ? 'transition-shadow' : ''
            } hover:shadow-sm ${isDraggingThis ? 'opacity-0' : 'opacity-100'}`}
            style={{
              left: `${image.position.x}px`,
              top: `${image.position.y}px`,
              zIndex: image.zIndex,
              transform: `rotate(${image.rotation}deg)`,
              transformOrigin: 'center center',
              width: `${image.width}px`,
              height: `${image.height}px`,
              cursor: image.link ? 'all-scroll' : 'zoom-in',
            }}
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden transition-colors">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      })}

      {/* Ghost image that follows the cursor while dragging */}
      {isDragging && draggedImageIndex !== null && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x - dragOffset.x}px`,
            top: `${mousePosition.y - dragOffset.y}px`,
            zIndex: 9999,
            transform: `rotate(${positionedImages[draggedImageIndex].rotation}deg)`,
            transformOrigin: 'center center',
            width: `${positionedImages[draggedImageIndex].width}px`,
            height: `${positionedImages[draggedImageIndex].height}px`,
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden">
            <Image
              src={
                positionedImages[draggedImageIndex].src || '/placeholder.svg'
              }
              alt={positionedImages[draggedImageIndex].alt}
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>
      )}

      {/* Spotlight overlay */}
      {spotlightImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-8 animate-in fade-in duration-200"
          onClick={closeSpotlight}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeSpotlight}
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Close</span>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-50 duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: `${Math.min(
                window.innerWidth * 0.9,
                spotlightImage.width * 2
              )}px`,
              height: `${Math.min(
                window.innerHeight * 0.9,
                spotlightImage.height * 2
              )}px`,
            }}
          >
            <Image
              src={spotlightImage.src || '/placeholder.svg'}
              alt={spotlightImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white">
              <p>{spotlightImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
