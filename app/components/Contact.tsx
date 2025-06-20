'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contato" className="bg-gradient-to-br from-gray-50 to-white py-24 px-6 scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-inter font-bold text-title mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Entre em contato conosco e descubra como podemos ajudar você com soluções sustentáveis
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Informações de contato */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-inter font-bold text-title mb-8">
                Informações de Contato
              </h3>

              <ul className="space-y-6 mb-10">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Telefone</span>
                    {(t.raw('phones') as string[]).map((phone: string) => (
                      <a
                        key={phone}
                        href={`https://wa.me/55${phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-title hover:text-primary transition-colors duration-300"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </motion.li>

                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</span>
                    <a
                      href={`mailto:${t('email')}`}
                      className="text-lg font-semibold text-title hover:text-primary transition-colors duration-300"
                    >
                      {t('email')}
                    </a>
                  </div>
                </motion.li>

                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Endereço</span>
                    <a
                      href="https://maps.app.goo.gl/yZK4pgRTZf268BoEA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-title hover:text-primary transition-colors duration-300 whitespace-pre-line"
                    >
                      {t('address')}
                    </a>
                  </div>
                </motion.li>
              </ul>

              {/* Redes Sociais */}
              <div className="mb-8">
                <h4 className="text-xl font-inter text-title font-bold mb-6">
                  {t('socialTitle')}
                </h4>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/composulcompostagem" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="WhatsApp" 
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/composulcompostagem" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram" 
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/company/composul-compostagem/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Linkedin" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaWhatsapp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                {t('cta')}
              </motion.a>
            </div>
          </motion.div>

          {/* Logo e Formulário - Agora em coluna */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo central */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <img
                  src="/composul_logo_transparente.png"
                  alt="Logo Composul"
                  className="h-32 md:h-40 w-auto"
                />
                <div className="text-center mt-6">
                  <h4 className="text-xl font-bold text-title mb-2">{t('nameTitle') }</h4>
                  <p className="text-gray-600">{t('nameSubtitle')}</p>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
