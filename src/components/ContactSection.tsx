"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactSection() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Liga aqui o teu endpoint / serviço de email (ex: API route, Resend, Formspree...)
    console.log(form);
  };

  const socials = [
    { name: 'Instagram', icon: '/images/icons/instagram.png', href: '#' },
    { name: 'LinkedIn', icon: '/images/icons/linkedin.png', href: '#' },
    { name: 'X', icon: '/images/icons/x.png', href: '#' },
  ];

  return (
    <section className="bg-black px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="max-w-2xl mx-auto text-white/70">{t('description')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="w-full md:w-3/5 flex flex-col gap-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">{t('form.name')}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/50"
                placeholder={t('form.namePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-1">{t('form.email')}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/50"
                placeholder={t('form.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-1">{t('form.message')}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/50 resize-none"
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 mt-2 w-fit"
            >
              {t('form.submit')}
            </button>
          </form>

          {/* Informações / redes sociais */}
          <div className="w-full md:w-2/5 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">{t('info.title')}</h3>
              <p className="text-white/60 text-sm mb-1">{t('info.email')}</p>
              <p className="text-white/60 text-sm mb-1">{t('info.phone')}</p>
              <p className="text-white/60 text-sm">{t('info.address')}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">{t('social.title')}</h3>
              <div className="flex flex-row gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="border border-white/20 p-3 hover:border-white/50 transition-colors"
                    aria-label={social.name}
                  >
                    <Image src={social.icon} alt={social.name} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}