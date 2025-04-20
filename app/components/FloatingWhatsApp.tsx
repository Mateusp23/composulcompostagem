'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Composul no WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed z-[999] bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <FaWhatsapp className="w-6 h-6" />
    </motion.a>
  );
}
