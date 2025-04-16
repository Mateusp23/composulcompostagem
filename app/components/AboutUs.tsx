"use client";

import { Award, Recycle, Factory } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-title text-center mb-4">Quem Somos</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Somos uma empresa com mais de 12 anos de história, pioneira e especializada na coleta mecanizada,
              no tratamento de resíduos orgânicos através de compostagem e na produção de Fertilizante Orgânico
              Composto de alta qualidade, com registros de Estabelecimento Produtor (EP nº ...) e
              Produto (nº ... ), pelo ministério da Agricultura, Pecuária e Abastecimento/MAPA.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Atendemos os mais variados setores geradores de resíduos orgânicos, proporcionando a destinação
              final adequada conforme as diretrizes e exigências da nova Política Nacional de Resíduos
              Sólidos (Lei nº 12.305/2010), onde ao investirem os geradores garantem a não geração de passivos
              ambientais e consequentemente problemas relacionados a corresponsabilidade pelos resíduos gerados.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Somos representantes da UTV AG na América do Sul, empresa alemã, com mais de 20 anos de experiência
              no seguimento de tratamento biológico de RSU com a utilização da tecnologia de membranas
              semipermeáveis GORE® COVER, que garante alta eficiência de produção, total controle do processo
              e baixo custo operacional.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-[#437E3B]/10 p-6 rounded-lg flex items-start gap-4">
              <Award className="w-12 h-12 text-[#437E3B] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Pioneirismo</h3>
                <p className="text-gray-600">12 anos de experiência em coleta mecanizada e tratamento de resíduos orgânicos</p>
              </div>
            </div>

            <div className="bg-[#437E3B]/10 p-6 rounded-lg flex items-start gap-4">
              <Recycle className="w-12 h-12 text-[#437E3B] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Conformidade Legal</h3>
                <p className="text-gray-600">Atendemos todas as diretrizes da Política Nacional de Resíduos Sólidos</p>
              </div>
            </div>

            <div className="bg-[#437E3B]/10 p-6 rounded-lg flex items-start gap-4">
              <Factory className="w-12 h-12 text-[#437E3B] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Tecnologia Alemã</h3>
                <p className="text-gray-600">Representantes exclusivos da UTV AG e tecnologia GORE® COVER na América do Sul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}