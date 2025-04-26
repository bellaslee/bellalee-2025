// Important variables: scaleFactor, gridCols

'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { X, ExternalLink, ArrowRight, Maximize } from 'lucide-react';

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

  // Track drag start position to calculate distance moved
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
  const [wasDragged, setWasDragged] = useState(false);

  // Minimum distance to consider as a drag rather than a click (in pixels)
  const dragThreshold = 5;

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
        const newX = e.clientX - containerRect.left;
        const newY = e.clientY - containerRect.top;

        setMousePosition({
          x: newX,
          y: newY,
        });

        // Check if we've moved beyond the drag threshold
        const deltaX = newX - dragStartPosition.x;
        const deltaY = newY - dragStartPosition.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > dragThreshold && !wasDragged) {
          setWasDragged(true);
        }
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

        setIsDragging(false);
        setDraggedImage(null);
        setDraggedImageIndex(null);

        // Reset wasDragged after a short delay to allow click events to process
        setTimeout(() => {
          setWasDragged(false);
        }, 50);
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
    dragStartPosition,
    wasDragged,
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
    // const gridCols = Math.ceil(Math.sqrt((imageCount * width) / height));
    const gridCols = width < 640 ? 2 : 3;
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
        const randomX =
          width < 640
            ? baseX + (Math.random() * 0.2 - 0.1) * cellWidth
            : baseX + (Math.random() * 0.8 - 0.4) * cellWidth;
        const randomY =
          width < 640
            ? baseY + (Math.random() * 0.4 - 0.2) * cellHeight
            : baseY + (Math.random() * 0.8 - 0.4) * cellHeight;

        // Random rotation between -10 and 10 degrees
        const rotation = Math.random() * 20 - 10;

        // Scale down images for mobile if needed
        const scaleFactor = width < 640 ? 0.4 : width > 1800 ? 1.55 : 1;
        const scaledWidth = image.width * scaleFactor;
        const scaledHeight = image.height * scaleFactor;

        return {
          ...image,
          width: scaledWidth,
          height: scaledHeight,
          position: {
            // Adjust for image size to keep within bounds
            x: Math.max(
              0,
              Math.min(width - scaledWidth / 2, randomX - scaledWidth / 2)
            ),
            y: Math.max(
              0,
              Math.min(height - scaledHeight / 2, randomY - scaledHeight / 2)
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
    const initialX = e.clientX - containerRect.left;
    const initialY = e.clientY - containerRect.top;

    setMousePosition({
      x: initialX,
      y: initialY,
    });

    setDragStartPosition({
      x: initialX,
      y: initialY,
    });

    setDraggedImage(id);
    setDraggedImageIndex(index);
    setIsDragging(true);
    setWasDragged(false);

    // Update z-index to bring the dragged image to the front
    setPositionedImages((prevImages) => {
      const newImages = [...prevImages];
      const maxZ = Math.max(...newImages.map((img) => img.zIndex));
      newImages[index].zIndex = maxZ + 1;
      return newImages;
    });
  };

  // Helper function to check if a URL is external
  const isExternalUrl = (url: string): boolean => {
    return (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('//') ||
      (!url.startsWith('/') && !url.startsWith('#'))
    );
  };

  const handleImageClick = (image: PositionedImage, e: React.MouseEvent) => {
    // Only handle click if not dragging or if the drag distance was very small
    if (!wasDragged) {
      e.preventDefault();
      if (image.link) {
        if (isExternalUrl(image.link)) {
          // For external links, open in a new tab
          window.open(image.link, '_blank', 'noopener,noreferrer');
        } else {
          // For internal links, use Next.js router
          router.push(image.link);
        }
      } else {
        // If image doesn't have a link, open spotlight
        setSpotlightImage(image);
      }
    }
  };

  const closeSpotlight = () => {
    setSpotlightImage(null);
  };

  // Helper function to get the appropriate icon based on link type
  const getLinkIcon = (link?: string) => {
    if (!link) {
      return <Maximize className="w-full h-full" />;
    }
    if (isExternalUrl(link)) {
      return <ExternalLink className="w-full h-full" />;
    }
    return <ArrowRight className="w-full h-full" />;
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {positionedImages.map((image, index) => {
        const isDraggingThis = isDragging && draggedImageIndex === index;
        const icon = getLinkIcon(image.link);

        return (
          <div
            key={image.id}
            onMouseDown={(e) => handleMouseDown(e, image.id, index)}
            onClick={(e) => handleImageClick(image, e)}
            className={`absolute touch-none ${
              !isDragging ? 'transition-shadow' : ''
            } hover:shadow-xl ${
              !isDragging ? 'transition-shadow' : ''
            } hover:shadow-sm ${
              isDraggingThis ? 'opacity-0' : 'opacity-100'
            } group`}
            style={{
              left: `${image.position.x}px`,
              top: `${image.position.y}px`,
              zIndex: image.zIndex,
              transform: `rotate(${image.rotation}deg)`,
              transformOrigin: 'center center',
              width: `${image.width}px`,
              height: `${image.height}px`,
              cursor: 'all-scroll',
            }}
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden transition-colors shadow-sm">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity shadow-sm p-1">
                {icon}
              </div>
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
            {draggedImageIndex !== null && (
              <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity shadow-sm p-1">
                {getLinkIcon(positionedImages[draggedImageIndex].link)}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spotlight overlay */}
      {spotlightImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeSpotlight}
        >
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 focus:outline-none p-2"
            onClick={closeSpotlight}
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <Image
            src={spotlightImage.src || '/placeholder.svg'}
            alt={spotlightImage.alt}
            fill
            className="w-full h-full object-contain"
            sizes="95vw"
          />

          <div className="absolute bottom-0 left-6 right-0 bg-black bg-opacity-70 text-white">
            <p>{spotlightImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
