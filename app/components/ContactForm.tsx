'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t('success'));
        setFormData({ nome: '', telefone: '', email: '', cidade: '', mensagem: '' });
      } else {
        setStatus('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Erro ao enviar. Verifique sua conexão.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-2xl space-y-4">
      <input
        type="text"
        name="nome"
        placeholder={t('name')}
        value={formData.nome}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
        required
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="tel"
          name="telefone"
          placeholder={t('phone')}
          value={formData.telefone}
          onChange={handleChange}
          className="flex-1 border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('email')}
          value={formData.email}
          onChange={handleChange}
          className="flex-1 border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
          required
        />
      </div>
      <input
        type="text"
        name="cidade"
        placeholder={t('city')}
        value={formData.cidade}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded-full text-sm outline-primary"
        required
      />
      <textarea
        name="mensagem"
        placeholder={t('message')}
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
        {t('submit')}
      </button>
      {status && <p className="text-green-600 text-sm text-center mt-2">{status}</p>}
    </form>
  );
}
