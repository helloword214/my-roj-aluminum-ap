// File: app/components/sections/Contact.tsx

import { FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-soft">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-base">
          Whether you&apos;re renovating or starting fresh, we&apos;re ready to assist you.
        </p>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-sky-700 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Business Address:</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Block 31, Lot 18, Brgy. Pedro Orata, Urdaneta City, Pangasinan
                  <br />
                  (Pangasinan Ville AFP - PNP HOUSING beside Pan Gas Refilling Area)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-sky-700 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Phone:</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">+63 926 437 7344</p>
              </div>
            </div>

            <div>
              <a
                href="https://www.facebook.com/roj.aluminum.workz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full font-medium shadow transition"
              >
                <FaFacebookMessenger size={16} />
                Chat via Messenger
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              title="ROJ Aluminum Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.2324031674045!2d120.6118755!3d15.9779536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913f4ebf70dc03%3A0xf21172d0ecda3b72!2sPangasinan%20Ville%20(%20AFP%20-%20PNP%20HOUSING%2C%20Urdaneta%20City%20Pangasinan)!5e0!3m2!1sen!2sph!4v1720558393882!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
