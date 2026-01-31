// File: app/components/sections/VideoGallery.tsx

import { motion } from 'framer-motion';
import * as React from 'react';
import { projectVideos } from '~/data/projectVideos';

export default function VideoGallery() {
  const videos = projectVideos; // static import
  const total = videos.length;

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const open = React.useCallback((idx: number) => setOpenIndex(idx), []);
  const close = React.useCallback(() => setOpenIndex(null), []);

  const prev = React.useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx;
      return (idx - 1 + total) % total;
    });
  }, [total]);

  const next = React.useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx;
      return (idx + 1) % total;
    });
  }, [total]);

  // keyboard controls
  React.useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openIndex, close, prev, next]);

  // prevent background scroll when modal open
  React.useEffect(() => {
    if (openIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex]);

  // show nothing if no videos (must be AFTER hooks)
  if (!total) {
    return (
      <section id="videos" className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-600 dark:text-neutral-300">
          No videos found.
        </div>
      </section>
    );
  }

  // featured = first video
  const featured = videos[0];
  const rest = videos.slice(1);

  return (
    <section id="videos" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Videos
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quick walkthroughs and installation highlights—watch the craftsmanship up close.
          </motion.p>
        </div>

        {/* Featured video card (premium hero) */}
        <motion.button
          type="button"
          onClick={() => open(0)}
          className="group relative w-full overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-white/5 shadow-md hover:shadow-xl transition text-left"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* We don’t autoplay. We show a “poster-like” frame using the video element itself. */}
            <video
              src={featured.src}
              preload="metadata"
              playsInline
              muted
              className="w-full h-[280px] sm:h-[420px] object-cover"
            >
              <track kind="captions" />
            </video>

            {/* overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

            {/* play button */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-105 transition">
                <span className="text-white text-2xl leading-none">▶</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/45 text-white px-3 py-1 text-xs backdrop-blur">
                Featured
              </div>
              <div className="mt-3 text-white font-semibold text-lg sm:text-xl">
                {featured.title}
              </div>
              <div className="mt-1 text-white/80 text-sm">Click to watch</div>
            </div>
          </div>
        </motion.button>

        {/* Thumbnail grid (desktop) */}
        {rest.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((v, i) => {
              const idx = i + 1; // because rest excludes featured
              return (
                <motion.button
                  key={v.src}
                  type="button"
                  onClick={() => open(idx)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-white/5 shadow-sm hover:shadow-lg transition text-left"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: (i % 9) * 0.03 }}
                >
                  {/* “Poster-like” preview: again no autoplay */}
                  <video
                    src={v.src}
                    preload="metadata"
                    playsInline
                    muted
                    className="w-full h-56 object-cover"
                  >
                    <track kind="captions" />
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-105 transition">
                      <span className="text-white text-xl leading-none">▶</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-neutral-800 dark:text-white font-medium">{v.title}</div>
                    <div className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">
                      Click to watch
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* Lightbox modal (loads video only when opened) */}
      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop (interactive) */}
          <button
            type="button"
            aria-label="Close video"
            onClick={close}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="relative z-[1] w-full max-w-5xl">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="text-white/80 text-sm">
                {videos[openIndex]?.title ?? 'Video'} • {openIndex + 1}/{total}
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
              <video
                key={videos[openIndex]?.src} // force reload when switching videos
                src={videos[openIndex]?.src}
                playsInline
                controls
                preload="metadata"
                className="w-full max-h-[78vh] object-contain bg-black"
              >
                <track kind="captions" />
              </video>

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 transition"
                aria-label="Previous video"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 transition"
                aria-label="Next video"
              >
                ›
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/70 px-1">
              <div>Tip: use ← → keys</div>
              <div>ESC to close</div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
