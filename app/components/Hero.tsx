'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-16 pt-10 pb-20"
      style={{
        backgroundImage: "url('/bg-hero-compostagem.jpg')",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Texto animado com framer-motion */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-inter mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-lg text-white font-roboto mb-8">
            {t('subtitle')}
          </p>
          <motion.a
            href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block cursor-pointer bg-gradient-to-r from-primary to-secondary text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {t('cta')}
          </motion.a>
        </motion.div>

        {/* Espaço vazio para equilíbrio */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
