// app/[locale]/layout.tsx

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  let messages: Record<string, string>;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    return notFound(); // importante usar "return" aqui
  }

  return (
    <html lang={locale} className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-background antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
