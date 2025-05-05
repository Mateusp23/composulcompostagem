'use client';

import { useState } from 'react';
import Image from 'next/image';
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

interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: Truck,
      title: 'Coleta / Logística',
      text: 'Soluções eficazes para a coleta mecanizada de resíduos orgânicos. Usamos caminhões licenciados e fornecemos contentores resistentes e práticos para armazenamento temporário adequado.',
      image: '/logistica-recebimento.jpg',
    },
    {
      icon: Leaf,
      title: 'Tratamento em Compostagem',
      text: 'Compostagem em sistema fechado com tecnologia alemã GORE® COVER, que garante eficiência, monitoramento total e redução de até 97% nos odores e vetores.',
      image: '/tratamento.jpg',
    },
    {
      icon: FlaskConical,
      title: 'Produção de Fertilizante',
      text: 'Resultado da compostagem: fertilizante orgânico certificado pelo MAPA, amplamente utilizado em hortaliças, frutíferas, áreas degradadas e paisagismo.',
      image: '/fertilizante.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Tecnologia e Consultoria',
      text: 'Desenvolvimento de projetos logísticos e fornecimento de tecnologia UTV AG para gestão e tratamento da fração orgânica de RSU em parceria com GORE® COVER.',
      image: '/tecnologia.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % services.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + services.length) % services.length);
    }
  };

  const closeModal = () => setCurrentIndex(null);

  return (
    <section id="servicos" className="bg-background px-6 md:px-12 py-20 scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">Serviços Prestados</h2>
        <p className="text-secondary font-roboto mt-4 max-w-2xl mx-auto">
          Atuamos em toda a cadeia da compostagem: da coleta até a produção de fertilizantes, com tecnologia e consultoria especializada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="cursor-pointer rounded-xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Image src={service.image} alt={service.title} width={600} height={300} className="w-full h-48 object-cover" />
            <div className="p-6 text-center flex flex-col items-center gap-4">
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-title font-inter">{service.title}</h3>
              <p className="text-secondary font-roboto leading-relaxed text-sm">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal com setas */}
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
              <button onClick={closeModal} className="absolute cursor-pointer top-3 right-3 text-black hover:text-orange transition">
                <X className="w-6 h-6" />
              </button>

              <Image
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                width={800}
                height={500}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{services[currentIndex].title}</h3>
                <p className="text-sm text-secondary">{services[currentIndex].text}</p>
              </div>

              {/* Setas de navegação */}
              <button
                onClick={handlePrev}
                className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={handleNext}
                className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-14">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-base font-medium px-8 py-3 rounded-full shadow-md transition-transform duration-300"
        >
          Solicite um orçamento
        </motion.a>
      </div>
    </section>
  );
}
