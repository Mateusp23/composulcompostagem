'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const logos = Array.from({ length: 46 }, (_, i) => `/parceiros/logo_${i + 1}.png`);

export default function Partners() {
  const t = useTranslations('partners');

  return (
    <section id="parceiros" className="scroll-mt-[80px] bg-primary/10 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">
          {t('title')}
        </h2>
        <p className="text-secondary text-lg font-roboto mt-4 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      {/* Carrossel infinito */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 55,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Parceiro ${index + 1}`}
                width={120}
                height={60}
                className="object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
