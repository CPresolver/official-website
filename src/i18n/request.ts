import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Isto corresponde ao segmento [locale] da URL (ex: /pt/... -> "pt")
  const requested = await requestLocale;

  // Só usamos o valor pedido se for uma das locales suportadas;
  // caso contrário, caímos para a locale por omissão.
  const locale = requested && routing.locales.includes(requested as (typeof routing.locales)[number])
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});