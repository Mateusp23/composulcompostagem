'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const cards = [
    {
      icon: CheckCircle,
      title: '12 anos de experiência',
      text: 'Pioneiros na coleta mecanizada e compostagem de resíduos orgânicos. Produzimos fertilizante orgânico com registros oficiais no MAPA.',
    },
    {
      icon: ShieldCheck,
      title: 'Soluções com respaldo legal',
      text: 'Atendemos diferentes setores conforme a Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010), evitando passivos ambientais.',
    },
    {
      icon: Globe,
      title: 'Parceria internacional',
      text: 'Representamos a UTV AG na América do Sul, com a tecnologia alemã GORE® COVER: alta eficiência e baixo custo no tratamento biológico.',
    },
  ];

  return (
    <section id="sobre" className="bg-[--color-primary]/10 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">
          Quem Somos
        </h2>
        <p className="text-secondary font-roboto mt-4 max-w-2xl mx-auto">
          Atuamos com compostagem orgânica de ponta e compromisso ambiental, aliados à inovação e respaldo técnico.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl p-6 text-left flex flex-col gap-4 transition-all duration-300
              bg-white/30 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-fit"
            >
              <card.icon className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold text-title font-inter">
              {card.title}
            </h3>
            <p className="text-secondary font-roboto leading-relaxed text-sm">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Botão Saiba mais */}
      <div className="text-center mt-12">
        <Link
          href="#contato"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-roboto text-sm md:text-base px-6 py-3 rounded-full shadow hover:shadow-md transition-all"
        >
          Saiba mais
        </Link>
      </div>
    </section>
  );
}
