import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Corre em todas as rotas exceto as internas do Next.js, API routes e ficheiros estáticos
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};