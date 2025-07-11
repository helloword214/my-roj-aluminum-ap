// File: app/components/ThemeToggle.tsx

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light');
    document.documentElement.classList.toggle(
      'dark',
      stored === 'dark' || (!stored && prefersDark)
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="btn-sheen-secondary relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-sky-600 text-sky-600 dark:text-sky-300 bg-white dark:bg-gray-800 transition hover:bg-sky-50 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
