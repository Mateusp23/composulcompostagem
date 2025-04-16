'use client';

import Image from 'next/image';

export default function Partners() {
  return (
    <section id="parceiros" className="bg-primary/10 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-title text-3xl md:text-4xl font-inter font-bold">
          Nossos Parceiros
        </h2>
        <p className="text-secondary font-roboto mt-4 max-w-2xl mx-auto">
          Empresas e instituições que confiam na Composul para transformar resíduos em soluções sustentáveis.
        </p>
      </div>

      {/* Galeria de logos */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Image
          src="/31cb1bc6-c294-4a59-94d2-8aaa7faa6a06.png"
          alt="Logos dos parceiros da Composul"
          width={1200}
          height={500}
          className="w-full max-w-5xl object-contain"
        />
      </div>
    </section>
  );
}
