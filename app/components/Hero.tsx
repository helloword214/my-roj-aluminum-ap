export default function Hero() {
  const handleSmoothScroll = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 mt-14 min-h-[90vh] sm:min-h-screen overflow-hidden bg-soft text-neutral-900 dark:text-white"
    >
      <div className="w-full max-w-2xl z-10 space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Built with Care. Framed for Life.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto">
          Simple, strong, and built to last — our aluminum and glass work is done with heart, not
          hype. Just honest quality for your space.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button
            onClick={() => handleSmoothScroll('#products')}
            className="btn-sheen bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-medium shadow relative text-sm sm:text-base"
          >
            View Products
          </button>

          <button
            onClick={() => handleSmoothScroll('#contact')}
            className="btn-sheen-secondary relative inline-block border border-sky-600 text-sky-600 dark:text-sky-300 px-6 py-3 rounded-full font-medium transition-colors hover:bg-sky-50 dark:hover:bg-gray-800 text-sm sm:text-base"
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>
      </div>

      {/* Subtle divider line for minimal style */}
      <div className="absolute bottom-6 sm:bottom-8 w-24 h-1 bg-sky-600 rounded-full opacity-60" />
    </section>
  );
}
