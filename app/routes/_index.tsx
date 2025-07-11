import type { MetaFunction } from '@remix-run/node';

import Hero from '~/components/Hero';
import ProductOverview from '~/components/sections/ProductOverview';
import WhyChooseUs from '~/components/sections/WhyChooseUs';
import ProjectGallery from '~/components/sections/ProjectGallery';
import Testimonials from '~/components/sections/Testimonials';
import ContactSection from '~/components/sections/ContactSection';
import Footer from '~/components/sections/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'ROJ Aluminum Windows' },
    {
      name: 'description',
      content:
        'Engineered aluminum windows built for modern aesthetics, enduring strength, and seamless functionality.',
    },
  ];
};

export default function Index() {
  return (
    <main className="space-y-0">
      <Hero />
      <ProductOverview />
      <WhyChooseUs />
      <ProjectGallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
