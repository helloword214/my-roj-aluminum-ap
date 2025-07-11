// File: app/components/sections/ProjectGallery.tsx

import { motion } from 'framer-motion';
import ImageCarousel from '../ui/ImageCarousel';

import project1 from '~/assets/images/projects/project-1.jpg';
import project2 from '~/assets/images/projects/project-2.jpg';
import project3 from '~/assets/images/projects/project-3.jpg';
import project4 from '~/assets/images/projects/project-4.jpg';
import project5 from '~/assets/images/projects/project-5.jpg';
import project6 from '~/assets/images/projects/project-6.jpg';
import project7 from '~/assets/images/projects/project-7.jpg';
import project8 from '~/assets/images/projects/project-8.jpg';
import project9 from '~/assets/images/projects/project-9.jpg';
import project10 from '~/assets/images/projects/project-10.jpg';
import project11 from '~/assets/images/projects/project-11.jpg';
import project12 from '~/assets/images/projects/project-12.jpg';
import project13 from '~/assets/images/projects/project-13.jpg';
import project14 from '~/assets/images/projects/project-14.jpg';
import project15 from '~/assets/images/projects/project-15.jpg';
import project16 from '~/assets/images/projects/project-16.jpg';
import project17 from '~/assets/images/projects/project-17.jpg';
import project18 from '~/assets/images/projects/project-18.jpg';
import project19 from '~/assets/images/projects/project-19.jpg';
import project21 from '~/assets/images/projects/project-21.jpg';
import project22 from '~/assets/images/projects/project-22.jpg';
import project23 from '~/assets/images/projects/project-23.jpg';
import project24 from '~/assets/images/projects/project-24.jpg';
import project25 from '~/assets/images/projects/project-25.jpg';

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project21,
  project22,
  project23,
  project24,
  project25,
];

export default function ProjectGallery() {
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

        {/* Fallback Grid for md+ screens */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
