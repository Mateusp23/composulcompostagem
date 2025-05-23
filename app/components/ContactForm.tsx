'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidade: '',
    mensagem: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviado com sucesso!');
    console.log(formData);
    // Aqui você pode enviar os dados para uma API ou integração
    setFormData({ nome: '', telefone: '', email: '', cidade: '', mensagem: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-2xl space-y-4">
      <input
        type="text"
        name="nome"
        placeholder="Qual seu nome?"
        value={formData.nome}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
        required
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="tel"
          name="telefone"
          placeholder="Tel/Whats"
          value={formData.telefone}
          onChange={handleChange}
          className="flex-1 border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
          required
        />
      </div>
      <input
        type="text"
        name="cidade"
        placeholder="Qual sua cidade?"
        value={formData.cidade}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
        required
      />
      <textarea
        name="mensagem"
        placeholder="Deixe sua mensagem..."
        rows={4}
        value={formData.mensagem}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded-2xl text-sm outline-primary"
        required
      />
      <button
        type="submit"
        className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition"
      >
        QUERO RECEBER CONTATO!
      </button>
      {status && <p className="text-green-600 text-sm text-center mt-2">{status}</p>}
    </form>
  );
}
