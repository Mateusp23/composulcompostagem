'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Informações de contato */}
        <div>
          <h2 className="text-3xl font-inter font-bold text-title mb-6">Entre em contato</h2>

          <ul className="space-y-4 text-sm font-roboto font-normal opacity-90 mb-8">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <a
                href="https://wa.me/5548999380221"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors duration-300"
              >
                (48) 9993-80221
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <a
                href="mailto:composulcompostagem@gmail.com"
                className="hover:text-orange transition-colors duration-300"
              >
                composulcompostagem@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <a
                href="https://www.google.com/maps/place/Servid%C3%A3o+de+Acesso+505+-+Vila+Nova,+I%C3%A7ara+-+SC,+88820-000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors duration-300"
              >
                Servidão de acesso 505 BR 101KM 379 <br />
                Vila Nova, Içara/SC - CEP 88820-000
              </a>
            </li>
          </ul>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-inter text-title font-bold mb-4">Acompanhe nossas redes:</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/composulcompostagem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary hover:text-orange transform hover:scale-110 transition duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-primary hover:text-orange transform hover:scale-110 transition duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/composulcompostagem?igsh=Z2dtcGVuMDBxNDIx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary hover:text-orange transform hover:scale-110 transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/composul-compostagem/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="text-primary hover:text-orange transform hover:scale-110 transition duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div>
          <a
            href="https://www.google.com/maps/place/Composul/@-28.7113324,-49.3276097,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/locale-compostagem.png"
              alt="Mapa estilizado da localização da Composul"
              width={900} // você pode ajustar conforme sua imagem
              height={420}
              className="w-full h-[450px] md:h-[420px] object-contain rounded-xl overflow-hidden"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
