'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <div className="w-full min-h-[80px] px-6 md:px-12 bg-gradient-to-l from-orange via-secondary to-primary shadow-lg flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative">

          {/* Logo: à esquerda no mobile, centralizado no desktop */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/" className="flex items-center">
              <img
                src="/new-logo-composul.png"
                alt="Logo Composul"
                className="h-16 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Ícone hamburguer mobile */}
          <div className="md:hidden ml-auto z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-6 ml-auto text-white font-roboto text-sm md:text-base">
            <Link href="#home" className="hover:underline transition-all">Home</Link>
            <Link href="#sobre" className="hover:underline transition-all">Sobre</Link>
            <Link href="#servicos" className="hover:underline transition-all">Serviços</Link>
            <Link href="#contato" className="hover:underline transition-all">Contato</Link>
            <Link href="#parceiros" className="hover:underline transition-all">Parceiros</Link>
          </nav>
        </div>
      </div>

      {/* Menu mobile dropdown animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-gradient-to-l from-orange via-secondary to-primary text-white font-roboto px-6 py-4 space-y-4 overflow-hidden"
          >
            <Link href="#home" className="block hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#sobre" className="block hover:underline" onClick={() => setMenuOpen(false)}>Sobre</Link>
            <Link href="#servicos" className="block hover:underline" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="#contato" className="block hover:underline" onClick={() => setMenuOpen(false)}>Contato</Link>
            <Link href="#parceiros" className="block hover:underline" onClick={() => setMenuOpen(false)}>Parceiros</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
