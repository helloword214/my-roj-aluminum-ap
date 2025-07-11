// File: app/components/ui/ImageCarousel.tsx

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect(); // initial
  }, [emblaApi, onSelect]);

  return (
    <div className="block md:hidden">
      {/* Carousel View */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full px-4">
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={clsx(
              'w-3 h-3 rounded-full transition-all',
              selectedIndex === idx
                ? 'bg-sky-600'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-sky-400 dark:hover:bg-sky-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}
