import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Made to Fit Your Space',
      description: 'We build based on your actual needs — from sizes to finishes.',
      icon: '📐',
    },
    {
      title: 'Simple and Clean Designs',
      description: 'No frills — just practical styles that match your home.',
      icon: '🪟',
    },
    {
      title: 'Assistance You Can Count On',
      description: "We're here to answer questions and help you through the process.",
      icon: '📞',
    },
  ];

  return (
    <section className="py-24 bg-sky-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Why Choose ROJ Aluminum?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We build, we listen, and we keep it simple — no big promises, just honest work.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {features.map(({ title, description, icon }, index) => (
            <motion.div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
