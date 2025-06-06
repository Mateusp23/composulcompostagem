'use client';

import { Award, Recycle, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('about');

  const highlights = [
    {
      icon: Award,
      title: t('highlights.0.title'),
      text: t('highlights.0.text'),
    },
    {
      icon: Recycle,
      title: t('highlights.1.title'),
      text: t('highlights.1.text'),
    },
    {
      icon: Factory,
      title: t('highlights.2.title'),
      text: t('highlights.2.text'),
    },
  ];

  return (
    <section className="scroll-mt-[80px] py-20 px-4 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-title text-center mb-10"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bloco de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.raw('paragraphs').map((paragraph: string, i: number) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <Link
              href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
              target="_blank"
              className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-full shadow hover:bg-primary/90 transition-all"
            >
              {t('cta')}
            </Link>
          </motion.div>

          {/* Destaques com ícones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#437E3B]/10 p-6 rounded-lg flex items-start gap-4 transition-transform duration-300"
              >
                <Icon className="w-12 h-12 text-[#437E3B] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-2xl mb-2">{title}</h3>
                  <p className="text-gray-600 text-lg">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
