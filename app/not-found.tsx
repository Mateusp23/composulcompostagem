'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <h1 className="text-6xl font-bold text-title mb-4">404</h1>
        <p className="text-lg text-secondary mb-6 font-roboto">
          Ops! A página que você está procurando não foi encontrada.<br />
          Pode ter sido removida ou nunca existido.
        </p>

        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 duration-300"
        >
          Voltar para o início
        </Link>
      </motion.div>
    </main>
  );
}
