// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-16 pt-10 pb-20"
      style={{
        backgroundImage: "url('/bg-hero.jpg')", // Certifique-se que a imagem está em public/bg-hero.jpg
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-inter mb-6 text-white">
            Compostagem inteligente Um futuro sustentável
          </h1>
          <p className="text-lg text-white font-roboto mb-8">
            Soluções ecológicas para transformar resíduos em vida. Cuidamos do planeta com você, de forma prática e eficiente.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contato"
            className="inline-block bg-primary text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition-all hover:bg-opacity-90"
          >
            Fale com a Composul
          </motion.a>
        </motion.div>

        {/* Espaço vazio à direita para equilíbrio visual */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
