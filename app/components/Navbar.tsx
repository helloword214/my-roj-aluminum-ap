import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '~/assets/logo.png';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('#hero');
          }}
          className="flex items-center gap-3 text-sky-700 dark:text-white text-xl font-bold"
        >
          <img
            src={logo}
            alt="ROJ Logo"
            className="w-10 h-10 object-cover rounded-full border border-sky-600 shadow-sm bg-white"
          />
          ROJ Aluminum
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(href);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-sky-600 transition"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="text-gray-700 dark:text-gray-300"
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close overlay"
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
          />

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 z-50 w-64 h-full bg-white dark:bg-gray-900 p-6 shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-sky-700 dark:text-white">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-gray-600 dark:text-gray-300"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="space-y-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(href);
                  }}
                  className="block text-gray-800 dark:text-gray-200 hover:text-sky-600 font-medium"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
