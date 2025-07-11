// File: app/components/sections/Testimonials.tsx

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Engr. Miguel Santos',
      role: 'Project Manager - Baguio',
      quote:
        'Matibay at maaasahan. ROJ Aluminum is my top choice for every residential build I manage.',
    },
    {
      name: 'Marites D.',
      role: 'Homeowner - Pangasinan',
      quote:
        'Nagustuhan ko talaga ang design ng bintana. Simple pero elegante. Swak sa bahay namin!',
    },
    {
      name: 'Carlos V.',
      role: 'Cafe Owner - Baguio',
      quote:
        'The glass panels they installed gave my café the clean modern vibe I was aiming for. Salamat, ROJ!',
    },
  ];

  return (
    <section className="py-24 bg-sky-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Subtitle (optional for balance) */}
        <motion.p
          className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Trusted by homeowners, business owners, and professionals across Luzon.
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, quote }, index) => (
            <motion.div
              key={name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                “{quote}”
              </p>
              <div className="text-sm font-semibold text-sky-700 dark:text-sky-300">{name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
