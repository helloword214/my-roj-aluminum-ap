// File: app/components/Footer.tsx

import { Link } from '@remix-run/react';
import { FaFacebookF } from 'react-icons/fa';
import { MdBusiness, MdOutlineGavel, MdVerifiedUser } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Legal + Icons */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ROJ Aluminum. All rights reserved.
          </p>

          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-300 text-xl">
            <span title="DTI Accredited" className="shrink-0">
              <MdBusiness />
            </span>
            <span title="BIR Registered" className="shrink-0">
              <HiOutlineDocumentText />
            </span>
            <span title="DOLE Compliant" className="shrink-0">
              <MdVerifiedUser />
            </span>
            <span title="SCC / LGU Registered" className="shrink-0">
              <MdOutlineGavel />
            </span>
            <Link
              to="https://www.facebook.com/roj.aluminum.workz"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Page"
              className="shrink-0 hover:text-blue-600 dark:hover:text-white transition"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
