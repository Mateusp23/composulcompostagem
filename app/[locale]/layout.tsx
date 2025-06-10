// app/[locale]/layout.tsx

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
