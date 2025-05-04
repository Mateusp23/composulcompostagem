import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#437E3B] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <a href="/">
              <Image
                src="/new-logo-composul.png"
                alt="Logo da Composul"
                width={140}
                height={60}
                className="mb-4"
              />
            </a>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-inter text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm font-roboto opacity-90">
              <li>Coleta e Logística</li>
              <li>Tratamento em Compostagem</li>
              <li>Produção de Fertilizante</li>
              <li>Tecnologia e Consultoria</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-inter text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm font-roboto font-normal opacity-90">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange mt-1" />
                <div className="flex flex-col leading-tight gap-2">
                  <span>(48) 9993-80221</span>
                  <span>(48) 98829-0320</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange mt-1" />
                <span>contato@composul.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange mt-1" />
                <div className="leading-tight">
                  <span>Servidão de acesso 505 BR 101KM 379</span><br />
                  <span>Vila Nova, Içara/SC - CEP 88820-000</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-xl font-inter text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/composulcompostagem" aria-label="Facebook" target='_blank' className="hover:text-white text-orange transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://wa.me/5548999380221?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Composul!" aria-label="WhatsApp" target='_blank' className="hover:text-white text-orange transition-colors duration-300">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/composulcompostagem?igsh=Z2dtcGVuMDBxNDIx" aria-label="Instagram" target='_blank' className="hover:text-white text-orange transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/composul-compostagem/" aria-label="Linkedin" target='_blank' className="hover:text-white text-orange transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-orange mt-12 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Composul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
