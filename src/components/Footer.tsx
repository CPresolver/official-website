"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image';
import Link from 'next/link';

type FooterLink = { label: string; href: string };

export default function Footer() {
  const t = useTranslations('Footer');

  const companyItems = t.raw('company.items') as FooterLink[];
  const servicesItems = t.raw('services.items') as FooterLink[];
  const productsItems = t.raw('products.items') as FooterLink[];
  const bottomLinks = t.raw('bottom.links') as FooterLink[];

  return (
    <footer className="flex items-center justify-center font-sans bg-[#1a1a1a] px-6">
      <div className="max-w-6xl my-10 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[300px]">
          <div>
            <h3 className="text-2xl">{t('hire.title')}</h3>

            <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 my-3">
              <Link href="#projects">
                {t('hire.button')}
              </Link>
              <Image
                src="/images/icons/arrow_forward.png"
                alt="Arrow Right"
                width={40}
                height={30}
                className="inline-block ml-2"
              />
            </button>
            <p className="text-white/50 text-sm">{t('hire.subtitle')}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h4 className="text-xl font-bold mb-2">{t('company.title')}</h4>
              {companyItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block mb-1 text-white/50 text-sm hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">{t('services.title')}</h4>
              {servicesItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block mb-1 text-white/50 text-sm hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">{t('products.title')}</h4>
              {productsItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block mb-1 text-white/50 text-sm hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-10 md:mt-20 gap-4">
          <p className="text-white/50 text-sm">{t('bottom.copyright')}</p>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-8">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 text-sm hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}