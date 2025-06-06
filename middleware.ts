import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'always' // 👈 força prefixo em todas as rotas, inclusive pt
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|assets|api|.*\\..*).*)']
};
