// app/components/Hero.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-16 pt-10 pb-20"
      style={{
        backgroundImage: "url('/bg-hero-compostagem.jpg')", // Certifique-se que a imagem está em public/bg-hero.jpg
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Texto */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-inter mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-lg text-white font-roboto mb-8">
            {t('subtitle')}
          </p>
          <button className="bg-gradient-to-r from-primary to-secondary text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition-transform duration-300">
            {t('cta')}
          </button>
        </div>

        {/* Espaço vazio à direita para equilíbrio visual */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
