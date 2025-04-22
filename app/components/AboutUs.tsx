'use client';

import { Award, Recycle, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutUs() {
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
          Quem Somos
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
            <p className="text-gray-600 leading-relaxed">
              Somos uma empresa com mais de 12 anos de história, pioneira e especializada na coleta mecanizada,
              no tratamento de resíduos orgânicos através de compostagem e na produção de Fertilizante Orgânico
              Composto de alta qualidade, com registros no Ministério da Agricultura.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Atendemos setores variados, oferecendo destinação adequada conforme a Política Nacional de Resíduos
              Sólidos (Lei nº 12.305/2010), evitando passivos ambientais e corresponsabilidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Representamos a UTV AG na América do Sul, empresa alemã com tecnologia GORE® COVER:
              controle total do processo, alta eficiência e baixo custo operacional.
            </p>

            <Link
              href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
              target='_blank'
              className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-full shadow hover:bg-primary/90 transition-all"
            >
              Saiba mais
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
            {[
              {
                icon: Award,
                title: 'Pioneirismo',
                text: '12 anos de experiência em coleta mecanizada e tratamento de resíduos orgânicos',
              },
              {
                icon: Recycle,
                title: 'Conformidade Legal',
                text: 'Atendemos todas as diretrizes da Política Nacional de Resíduos Sólidos',
              },
              {
                icon: Factory,
                title: 'Tecnologia Alemã',
                text: 'Representantes exclusivos da UTV AG e tecnologia GORE® COVER na América do Sul',
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#437E3B]/10 p-6 rounded-lg flex items-start gap-4 transition-transform duration-300"
              >
                <Icon className="w-12 h-12 text-[#437E3B] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
