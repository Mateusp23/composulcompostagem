// app/components/About.tsx
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="bg-[--color-background] px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Lado esquerdo: conteúdo animado */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[--color-title] text-3xl md:text-4xl font-inter font-bold mb-6">
            Quem Somos
          </h2>
          <div className="space-y-5 text-[--color-secondary] font-roboto text-base leading-relaxed">
            <p>
              Com mais de <strong>12 anos de história</strong>, somos pioneiros na coleta mecanizada e compostagem de resíduos orgânicos. Produzimos fertilizante orgânico composto de <strong>alta qualidade</strong>, com registros oficiais no <strong>MAPA</strong> (EP nº ... | Produto nº ...).
            </p>
            <p>
              Atendemos diversos setores geradores de resíduos, oferecendo destinação final adequada, conforme a <strong>Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010)</strong>. Isso evita passivos ambientais e garante segurança jurídica aos nossos clientes.
            </p>
            <p>
              Representamos a <strong>UTV AG</strong> na América do Sul — uma empresa alemã com mais de 20 anos de experiência em tratamento biológico de RSU, utilizando a avançada <strong>tecnologia GORE® COVER</strong>: controle total, alta eficiência e baixo custo operacional.
            </p>
          </div>
        </motion.div>

        {/* Lado direito: imagem ou ícone animado */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1617677916288-7a5c8e88a285?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // substitua por uma imagem sobre compostagem ou parceria
            alt="Compostagem e sustentabilidade"
            className="rounded-xl shadow-lg max-w-[450px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
