// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  const { nome, telefone, email, cidade, mensagem } = data;

  // Configure o SMTP da HostGator (ou outro)
  const transporter = nodemailer.createTransport({
    host: 'mail.composul.com', // substitua pelo seu host
    port: 465,
    secure: true, // true para 465, false para outras portas
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: 'contato@composul.com', // email que vai receber
      subject: `Novo contato de ${nome} - Site Composul`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
