import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#437E3B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-inter text-orange font-bold mb-4">Composul</h3>
            <p className="text-sm opacity-90 font-roboto">
              Soluções sustentáveis em gestão de resíduos orgânicos, transformando desafios
              ambientais em oportunidades.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-inter text-orange font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm font-roboto opacity-90">
              <li>Coleta e Logística</li>
              <li>Tratamento em Compostagem</li>
              <li>Produção de Fertilizante</li>
              <li>Tecnologia e Consultoria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-inter text-orange font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>(51) 3325-1700</li>
              <li>contato@composul.com</li>
              <li>Rua Liberdade, 63 - Sala 1001</li>
              <li>São Leopoldo/RS - CEP 93020-140</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-inter font-bold text-orange mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Composul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}