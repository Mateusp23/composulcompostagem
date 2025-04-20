'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = Array.from({ length: 46 }, (_, i) => `/parceiros/logo_${i + 1}.png`);

export default function Partners() {
  return (
    <section id="parceiros" className="bg-primary/10 px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">
          Nossos Parceiros
        </h2>
        <p className="text-secondary font-roboto mt-4 max-w-2xl mx-auto">
          Empresas e instituições que confiam na Composul para transformar resíduos em soluções sustentáveis.
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
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
