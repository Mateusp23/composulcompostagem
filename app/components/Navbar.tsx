'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const menuItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '#sobre' },
    { label: t('services'), href: '#servicos' },
    { label: t('contact'), href: '#contato' },
    { label: t('partners'), href: '#parceiros' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <div className="w-full min-h-[88px] px-6 md:px-12 flex items-center backdrop-blur-md transition-all duration-300 bg-gradient-to-l from-orange via-secondary to-primary shadow-lg">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center justify-center">
              <img
                src="/new-logo-composul.png"
                alt="Logo Composul"
                className="h-14 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-10">
            <nav className="flex gap-8 text-white font-roboto text-sm md:text-base">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group transition-all duration-200 uppercase"
                >
                  <span className="group-hover:text-orange-200">{item.label}</span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Switcher separado e com espaço */}
            <div className="ml-6">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Ícone hamburguer */}
          <div className="md:hidden ml-auto z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none transition-transform duration-200"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scaleY: 0.9, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden origin-top w-full bg-gradient-to-l from-orange via-secondary to-primary text-white font-roboto px-6 py-6 space-y-4 z-40 shadow-md"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base hover:text-orange-200 transition-all uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
