'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Leaf,
  FlaskConical,
  Lightbulb,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const serviceIcons: LucideIcon[] = [Truck, Leaf, FlaskConical, Lightbulb];
  const serviceImages: string[][] = [
    ['/coleta.jpg', '/coleta-2.jpeg', '/coleta-3.jpeg'],
    ['/tratamento.jpg', '/tratamento2.jpeg', '/tratamento3.jpeg', '/tratamento4.jpeg'],
    ['/fertilizante.jpg', '/fertilizante2.jpeg', '/fertilizante3.jpeg', '/fertilizante4.jpeg'],
    ['/tecnologia.jpg', '/tecnologia2.jpeg', '/tecnologia3.jpg', '/tecnologia4.jpg'],
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageNext = () => {
    if (currentIndex !== null) {
      const images = serviceImages[currentIndex];
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  const handleImagePrev = () => {
    if (currentIndex !== null) {
      const images = serviceImages[currentIndex];
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="servicos" className="bg-background px-6 md:px-12 py-20 scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">{t('title')}</h2>
        <p className="text-secondary text-lg font-roboto mt-4 max-w-2xl mx-auto">{t('description')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {t.raw('list').map((item: any, index: number) => {
          const Icon = serviceIcons[index];
          return (
            <motion.div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="cursor-pointer rounded-xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img src={serviceImages[index][0]} alt={item.title} width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6 text-center flex flex-col items-center gap-4">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-title uppercase font-inter">{item.title}</h3>
                <p className="text-secondary font-roboto leading-relaxed text-md">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute cursor-pointer top-2 right-2 text-white hover:text-orange transition">
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[400px] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={serviceImages[currentIndex][currentImageIndex]}
                    src={serviceImages[currentIndex][currentImageIndex]}
                    alt={t.raw(`list.${currentIndex}.title`)}
                    width={800}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Navegação */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {serviceImages[currentIndex].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === currentImageIndex ? 'bg-primary' : 'bg-gray-300'} transition-all duration-300`}
                    ></span>
                  ))}
                </div>

                <button
                  onClick={handleImagePrev}
                  className="absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={handleImageNext}
                  className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t(`list.${currentIndex}.title`)}</h3>
                <p className="text-md text-secondary">{t(`list.${currentIndex}.text`)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-14">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
          target='_blank'
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-base font-medium px-8 py-3 rounded-full shadow-md transition-transform duration-300"
        >
          {t('cta')}
        </motion.a>
      </div>
    </section>
  );
}
