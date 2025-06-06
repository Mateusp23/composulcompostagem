import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['pt', 'en', 'es'];
  const safeLocale = supportedLocales.includes(locale ?? '') ? (locale as string) : 'pt';
  return {
    messages: (await import(`../messages/${safeLocale}/common.json`)).default,
    locale: safeLocale
  };
}); 