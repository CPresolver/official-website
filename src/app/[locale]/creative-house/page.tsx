"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function CreativeHouse() {
  const t = useTranslations('CreativeHouse');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('category1');

  const services = [
    { key: 'category3', icon: '/images/icons/connect.png', left: '14.8%', top: '8%' },
    { key: 'category4', icon: '/images/icons/cloud.png', left: '41.6%', top: '2%' },
    { key: 'category5', icon: '/images/icons/architecture.png', left: '70%', top: '4%' },
    { key: 'category2', icon: '/images/icons/mobile.png', left: '7.6%', top: '23%' },
    { key: 'category1', icon: '/images/icons/web.png', left: '7.6%', top: '45%' },
    { key: 'category6', icon: '/images/icons/icon_tech.png', left: '71%', top: '36%' },
    { key: 'category7', icon: '/images/icons/design.png', left: '74.5%', top: '68%' },
    { key: 'category8', icon: '/images/icons/icon_tech.png', left: '41%', top: '84%' },
  ];

  const projects = [
    { key: 'spout', image: '/images/creative-house/projects/gradient1.png', logo: '/images/solutions/spout.png', category: 'mobile' },
    { key: 'efarm', image: '/images/creative-house/projects/gradient2.png', logo: '/images/solutions/e_farm.png', category: 'web' },
    { key: 'cpsongs', image: '/images/creative-house/projects/gradient3.png', logo: '/images/solutions/CPsongs.png', category: 'web' },
  ];

  const projectTags = ['Website', 'Business', 'Template'];

  return (
    <>
      {/* Banner */}
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-10 px-6 md:px-16 sm:items-start">
          <Navbar />

          <div className="pb-10 pt-16 md:pb-20 md:pt-32 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="mb-2 text-lg">{t('banner.title')}</p>
                <h1 className="text-2xl text-white/40">C.Presolver</h1>
                <p className="text-3xl md:text-5xl mb-8 max-w-xl">
                  {t('banner.description')}
                </p>

                <div className="relative w-fit">
                  <div className="absolute inset-0 border border-white/30 bg-[#F2EFEF] opacity-50 translate-x-2 translate-y-2 -z-10" />
                  <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4">
                    {t('banner.button')}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/images/creative-house/figure_banner.png"
                  alt="Banner Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-full"
                />
              </div>
            </div>

            <div className="border border-white/20 p-8 mt-10 md:mt-16 bg-[#1A1A1A]">
              <h2 className="text-xl md:text-xl text-center mb-2">
                {t('banner.title_quote')}
              </h2>
              <p className="text-2xl md:text-4xl text-center">
                {t('banner.quote')}
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className="w-full bg-gray-400 h-[180px] md:h-[300px]"></div>

      {/* Services */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-start text-white">
            {t('services.description')}
          </p>

          {/* Diagrama - desktop */}
          <div className="hidden md:block relative w-full aspect-[992/448] mt-16">
            <svg
              viewBox="0 0 992 448"
              className="absolute inset-0 w-full h-full z-0"
              fill="none"
            >
              <line x1="220" y1="66" x2="330" y2="150" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="486" y1="41" x2="400" y2="150" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="740" y1="48" x2="580" y2="120" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="218" y1="118" x2="325" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="218" y1="230" x2="325" y2="255" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="706" y1="177" x2="628" y2="210" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="740" y1="320" x2="578" y2="295" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="483" y1="380" x2="578" y2="295" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

              <circle cx="330" cy="150" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="400" cy="150" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="580" cy="120" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="325" cy="165" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="325" cy="255" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="628" cy="210" r="3.5" fill="white" fillOpacity="0.7" />
              <circle cx="578" cy="295" r="3.5" fill="white" fillOpacity="0.7" />
            </svg>

            <div
              className="absolute z-0"
              style={{ left: '32%', top: '20%', width: '36%' }}
            >
              <Image
                src="/images/creative-house/services_illustration.png"
                alt="Services"
                width={340}
                height={230}
                className="w-full h-auto opacity-90"
              />
            </div>

            {services.map((service) => {
              const description = t(`services.categories.${service.key}.description`);
              const hasDescription = description.length > 0;
              const isActive = activeService === service.key;
              const showDescription = isActive && hasDescription;

              return (
                <button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  className={`absolute text-left border px-4 py-3 transition-all duration-300 hover:cursor-pointer ${isActive
                    ? 'z-20 border-white/40 bg-[#111]'
                    : 'z-10 border-white/20 bg-black hover:border-white/40'
                    } ${showDescription ? 'w-64' : 'w-56'}`}
                  style={{ left: service.left, top: service.top }}
                >
                  <div className="flex flex-row items-center gap-2">
                    <Image src={service.icon} alt="" width={18} height={18} />
                    <h3 className="font-bold text-sm">
                      {t(`services.categories.${service.key}.title`)}
                    </h3>
                  </div>
                  {showDescription && (
                    <p className="text-sm text-white/60 mt-3">{description}</p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Diagrama - mobile (lista simples) */}
          <div className="md:hidden flex flex-col gap-3 mt-10 text-left">
            <Image
              src="/images/services_illustration.png"
              alt="Services"
              width={300}
              height={300}
              className="w-40 sm:w-48 h-auto mx-auto mb-4 opacity-90"
            />
            {services.map((service) => {
              const description = t(`services.categories.${service.key}.description`);
              const hasDescription = description.length > 0;
              const isActive = activeService === service.key;
              const showDescription = isActive && hasDescription;

              return (
                <button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  className={`text-left border px-4 py-3 transition-all duration-300 hover:cursor-pointer ${isActive ? 'border-white/40 bg-[#111]' : 'border-white/20 bg-black'
                    }`}
                >
                  <div className="flex flex-row items-center gap-2">
                    <Image src={service.icon} alt="" width={18} height={18} />
                    <h3 className="font-bold text-sm">
                      {t(`services.categories.${service.key}.title`)}
                    </h3>
                  </div>
                  {showDescription && (
                    <p className="text-sm text-white/60 mt-3">{description}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projects.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-start text-white">{t('projects.description')}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible md:w-56 shrink-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`text-left text-sm px-4 py-2 border whitespace-nowrap hover:cursor-pointer ${activeCategory === 'all' ? 'bg-white text-black' : 'bg-black border-white/20 text-white/70'
                  }`}
              >
                {t('projects.categories.all')}
              </button>
              <button
                onClick={() => setActiveCategory('mobile')}
                className={`text-left text-sm px-4 py-2 border whitespace-nowrap hover:cursor-pointer ${activeCategory === 'mobile' ? 'bg-white text-black' : 'bg-black border-white/20 text-white/70'
                  }`}
              >
                {t('projects.categories.mobile')}
              </button>
              <button
                onClick={() => setActiveCategory('web')}
                className={`text-left text-sm px-4 py-2 border whitespace-nowrap hover:cursor-pointer ${activeCategory === 'web' ? 'bg-white text-black' : 'bg-black border-white/20 text-white/70'
                  }`}
              >
                {t('projects.categories.web')}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              {projects
                .filter((project) => activeCategory === 'all' || project.category === activeCategory)
                .map((project) => (
                  <div key={project.key} className="">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={project.image}
                        alt={t(`projects.items.${project.key}.title`)}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${t(`projects.items.${project.key}.title`)} logo`}
                          width={140}
                          height={140}
                          className="object-contain w-1/3 h-auto"
                        />
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex flex-row gap-3 mb-3 bg-black/50">
                        {projectTags.map((tag) => (
                          <span key={tag} className="text-xs text-white/50 border-r border-gray-500 py-1 px-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {t(`projects.items.${project.key}.title`)}
                      </h3>
                      <p className="text-sm text-white/60">
                        {t(`projects.items.${project.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto border border-white/20 bg-black relative py-16 px-6 md:px-16 text-center overflow-hidden">
          {/* Fundo com efeito de glow, igual ao print */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 left-4 w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 left-1/3 w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-6 right-6 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-60 md:h-60 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-2">{t('cta.description')}</p>
            <p className="font-medium mb-8">{t('cta.highlight')}</p>

            <div className="flex justify-center">
              <div className="relative w-fit isolate">
                <div className="absolute inset-0 border border-white/30 bg-[#F2EFEF] opacity-50 translate-x-2 translate-y-2 -z-10" />
                <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4">
                  {t('cta.button')}
                  <Image
                    src="/images/icons/schedule.png"
                    alt="Arrow Right"
                    width={20}
                    height={10}
                    className="inline-block ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  )
}