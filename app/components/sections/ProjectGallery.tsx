// File: app/components/sections/ProjectGallery.tsx

import { motion } from 'framer-motion';
import * as React from 'react';
import ImageCarousel from '../ui/ImageCarousel';
import { projectImages as images } from '~/data/projectImages';

export default function ProjectGallery() {
  // Premium gallery pattern: featured mosaic + masonry + lightbox
  const FEATURED_COUNT = 6;
  const STEP = 30; // masonry loads feel nicer in bigger chunks
  const [visible, setVisible] = React.useState(STEP);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Use memo with dependencies to avoid stale slices
  const featured = React.useMemo(() => images.slice(0, FEATURED_COUNT), []);
  const rest = React.useMemo(() => images.slice(FEATURED_COUNT), []);
  const shown = React.useMemo(() => rest.slice(0, visible), [rest, visible]);

  const openLightbox = React.useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = React.useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = React.useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return idx;
      return (idx - 1 + images.length) % images.length;
    });
  }, []);

  const goNext = React.useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return idx;
      return (idx + 1) % images.length;
    });
  }, []);

  // Keyboard controls for premium feel
  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  // Prevent background scroll when lightbox is open
  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex]);
  return (
    <section id="projects" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our recent work, built with care and fitted to real homes.
        </motion.p>

        {/* Mobile Carousel */}
        <ImageCarousel images={images} />

        {/* Premium desktop mosaic (md+) */}
        <div className="hidden md:block mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] text-left">
            {featured.map((img, idx) => {
              const span =
                idx === 0
                  ? 'lg:col-span-2 lg:row-span-2 md:row-span-2'
                  : idx === 1
                  ? 'lg:col-span-2 md:col-span-2'
                  : 'lg:col-span-1';

              const globalIndex = idx; // featured are the first items in the global images array

              return (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => openLightbox(globalIndex)}
                  className={[
                    'relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl',
                    'border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-white/5',
                    'group w-full text-left',
                    span,
                  ].join(' ')}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                >
                  <img
                    src={img}
                    alt={`Featured Project ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* subtle gradient + label (premium feel) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/45 text-white px-3 py-1 text-xs backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                      Project {idx + 1}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Masonry gallery (rest) */}
          <div className="mt-10 text-left">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {shown.map((img, idx) => {
                const globalIndex = FEATURED_COUNT + idx; // because shown is rest.slice(0, visible)
                return (
                  <motion.button
                    key={globalIndex}
                    type="button"
                    onClick={() => openLightbox(globalIndex)}
                    className="group mb-6 w-full overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-white/5 shadow-sm hover:shadow-lg transition text-left"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: (idx % 18) * 0.01 }}
                  >
                    <img
                      src={img}
                      alt={`Project ${globalIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-neutral-600 dark:text-neutral-300">
                          Project {globalIndex + 1}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          Click to view
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Load more */}
          {visible < rest.length ? (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setVisible((v) => Math.min(v + STEP, rest.length))}
                className="px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60
                           text-neutral-800 dark:text-white shadow-sm hover:shadow-md transition"
              >
                Load more projects ({Math.min(visible + STEP, rest.length)} / {rest.length})
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop (interactive) */}
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeLightbox}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Dialog content (non-interactive wrapper) */}
          <div className="relative w-full max-w-6xl z-[1]">
            <div className="absolute -top-2 right-0 flex items-center gap-2">
              <div className="text-xs text-white/70">
                {lightboxIndex + 1} / {images.length}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <img
                src={images[lightboxIndex]}
                alt={`Project ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain bg-black"
                decoding="async"
              />

              {/* Controls */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 transition"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 transition"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <div>Tip: use ← → keys</div>
              <div>ESC to close</div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
