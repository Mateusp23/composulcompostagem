'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Truck,
  Leaf,
  FlaskConical,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Coleta / Logística',
      text: 'Soluções eficazes para a coleta mecanizada de resíduos orgânicos. Usamos caminhões licenciados e fornecemos contentores resistentes e práticos para armazenamento temporário adequado.',
      image: '/coleta.jpg', // Adicione essa imagem futuramente
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

  return (
    <section id="servicos" className="bg-background px-6 md:px-12 py-20 scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">
          Serviços Prestados
        </h2>
        <p className="text-secondary font-roboto mt-4 max-w-2xl mx-auto">
          Atuamos em toda a cadeia da compostagem: da coleta até a produção de fertilizantes, com tecnologia e consultoria especializada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center flex flex-col items-center gap-4">
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-title font-inter">
                {service.title}
              </h3>
              <p className="text-secondary font-roboto leading-relaxed text-sm">
                {service.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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
