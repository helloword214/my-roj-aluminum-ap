import { motion } from 'framer-motion';
import windowImg from '~/assets/images/products/windows.jpg';
import doorImg from '~/assets/images/products/doors.jpg';
import cabinetImg from '~/assets/images/products/cabinet.jpg';

export default function ProductOverview() {
  const products = [
    {
      name: 'Aluminum Windows',
      image: windowImg,
      description: 'Simple and efficient—made to let light in and keep heat out.',
    },
    {
      name: 'Glass Doors',
      image: doorImg,
      description:
        'Aluminum doors made to look clean, sharp, and simple — just the way you want it',
    },
    {
      name: 'Cabinets made of Aluminum',
      image: cabinetImg,
      description: 'Neat storage with aluminum framing—built to last, easy to maintain',
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-white via-sky-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            What We Offer
          </motion.h2>

          <motion.p
            className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build what works best for you, made with care and attention to detail.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {products.map(({ name, image, description }, index) => (
            <motion.div
              key={name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                  {name}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
