"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Home() {
  const t = useTranslations('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans ">
        <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-10 px-6 md:px-16 sm:items-start">
          <nav className="w-full md:w-auto bg-black">
            <div className="flex flex-row items-center justify-between md:justify-start gap-4 md:gap-50 px-6 py-4">
              <div>
                <h2>CPresolver</h2>
              </div>

              {/* Menu desktop */}
              <div className="hidden md:flex flex-row gap-8">
                <li className="list-none">Company</li>
                <li className="list-none">Safety</li>
                <li className="list-none">Product</li>
                <li className="list-none">Culture</li>
              </div>

              <div className="hidden md:block">
                <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 my-3">
                  Creative House
                </button>
              </div>

              {/* Botão hamburger - só mobile */}
              <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>

            {/* Menu mobile (dropdown) */}
            {menuOpen && (
              <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
                <li className="list-none">Company</li>
                <li className="list-none">Safety</li>
                <li className="list-none">Product</li>
                <li className="list-none">Culture</li>
                <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 w-fit">
                  Creative House
                </button>
              </div>
            )}
          </nav>

          <div className="pb-10 pt-16 md:pb-20 md:pt-40 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="">
                <p className="mb-2 text-lg">{t('banner.title')}</p>
                <h1 className="text-2xl text-white/40">CPresolver</h1>
                <p className="text-3xl md:text-5xl mb-6">
                  {t('banner.description')}
                </p>

                <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4">
                  {t('banner.button')}
                </button>
              </div>

              <div>
                <Image
                  src="/images/banner_futuristic.png"
                  alt="Banner"
                  width={500}
                  height={300}
                  className="w-full h-auto md:w-[500px]"
                />
              </div>
            </div>


            <div className="border border-white/20 p-3 mt-6 md:mt-0 ml-0 md:ml-12 bg-black">
              <h2 className="text-lg md:text-xl text-center mb-2 text-medium">
                {t('banner.title_qoute')}
              </h2>
              <p className="text-2xl md:text-4xl text-center">
                {t('banner.quote')}
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/original-ae72b4ea7eed5c28c8aeb6d5153ab50f.png"
            alt="Banner"
            width={500}
            height={300}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="w-full md:w-4/5">
            <p>{t('mission.name')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('mission.title')}</h2>
            <p className="text-lg">{t('mission.description')}</p>

            <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black text-lg md:text-xl font-medium py-2 px-4 mt-8">
              {t('mission.button')}
              <Image
                src="/images/arrow_forward.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 p-6 md:p-8 ml-0 md:ml-28">
          <div className="w-full md:w-4/5">
            <p>{t('story.name')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('story.title')}</h2>
            <p className="text-lg">{t('story.description')}</p>

            <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black text-lg md:text-xl font-medium py-2 px-4 mt-8">
              {t('story.button')}
              <Image
                src="/images/arrow_forward.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <Image
            src="/images/original-5828172199c35827a895546b8d91594d.png"
            alt="Banner"
            width={500}
            height={300}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/original-d88d3cda965e1eb365f7b93cdc207f31.png"
            alt="Banner"
            width={500}
            height={300}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="w-full md:w-4/5">
            <p>{t('target.name')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('target.title')}</h2>
            <p className="text-lg">{t('target.description')}</p>

            <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black text-lg md:text-xl font-medium py-2 px-4 mt-8">
              {t('target.button')}
              <Image
                src="/images/arrow_forward.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="w-full ml-0 md:ml-28">
            <p>{t('solution.name')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">{t('solution.title')}</h2>

            <div className="flex flex-col flex-wrap md:flex-row gap-3 md:gap-2">
              <div className="bg-[#1a1a1a] p-4 border border-white/20 w-full md:w-2/5">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <Image
                    src="/images/icon_tech.png"
                    alt="Category 3"
                    width={20}
                    height={20}
                  />
                  <h3 className="font-bold">{t('solution.categories.category1.title')}</h3>
                </div>
                <p className="text-sm mt-4">{t('solution.categories.category1.description')}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 border border-white/20 w-full md:w-2/5">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <Image
                    src="/images/icon_tech.png"
                    alt="Category 2"
                    width={20}
                    height={20}
                  />
                  <h3 className="font-bold">{t('solution.categories.category2.title')}</h3>
                </div>
                <p className="text-sm mt-4">{t('solution.categories.category2.description')}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 border border-white/20 w-full md:w-2/5">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <Image
                    src="/images/icon_tech.png"
                    alt="Category 3"
                    width={20}
                    height={20}
                  />
                  <h3 className="font-bold">{t('solution.categories.category3.title')}</h3>
                </div>
                <p className="text-sm mt-4">{t('solution.categories.category3.description')}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 border border-white/20 w-full md:w-2/5">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <Image
                    src="/images/icon_tech.png"
                    alt="Category 3"
                    width={20}
                    height={20}
                  />
                  <h3 className="font-bold">{t('solution.categories.category3.title')}</h3>
                </div>
                <p className="text-sm mt-4">{t('solution.categories.category3.description')}</p>
              </div>
            </div>

            <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black text-lg md:text-xl font-medium py-2 px-4 mt-8">
              {t('solution.button')}
              <Image
                src="/images/arrow_forward.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/images/original-bd9075c27de72a79fb78e2f76d3afb14.png"
            alt="Banner"
            width={500}
            height={300}
            className="w-full"
          />
        </div>
      </div>

      <section className="p-6 md:p-24 bg-[url(/images/image_with_bright_loss.png)] bg-cover bg-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl mb-6 ml-0 md:ml-10">{t('message.title')}</h2>
              <p className="mb-4">{t('message.paragraph1')}</p>
              <p className="mb-4">{t('message.paragraph2')}</p>
              <p className="mb-4">{t('message.paragraph3')}</p>
              <p className="mb-4">{t('message.paragraph4')}</p>
              <p className="mb-4">{t('message.acknowledgment')}</p>
              <p>{t('message.from')}</p>
            </div>

            <div className="w-full md:w-1/2">
              <Image
                src="/images/message.png"
                alt="Banner"
                width={500}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section >


      <section className="max-w-6xl mx-auto px-6 md:px-0">
        <div className="my-10 md:my-20 border border-white/20 py-5 px-6 md:px-[100px] w-full bg-[#1a1a1a]">
          <h2 className="text-xl md:text-2xl text-center mb-4">{t('solutions.title')}</h2>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <Image
              src="/images/solutions/spout.png"
              alt="Banner"
              width={200}
              height={100}
            />

            <Image
              src="/images/solutions/e_farm.png"
              alt="Banner"
              width={200}
              height={100}
            />

            <Image
              src="/images/solutions/CPsongs.png"
              alt="Banner"
              width={200}
              height={100}
            />
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center font-sans bg-[#1a1a1a] px-6">
        <div className="max-w-6xl my-10 w-full">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[300px]">
            <div>
              <h3 className="text-2xl">Do you want to hire our team?</h3>

              <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 my-3">
                {t('banner.button')}
              </button>
              <p className="text-white/50 text-sm">Lets schedule a coffee meeting!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <h4 className="text-xl font-bold mb-2">Company</h4>
                <p className="mb-1 text-white/50 text-sm">About us</p>
                <p className="mb-1 text-white/50 text-sm">Mission and Vision</p>
                <p className="mb-1 text-white/50 text-sm">Our team</p>
                <p className="mb-1 text-white/50 text-sm">Careers</p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Services</h4>
                <p className="mb-1 text-white/50 text-sm">Software Development</p>
                <p className="mb-1 text-white/50 text-sm">Mobile Applications</p>
                <p className="mb-1 text-white/50 text-sm">Artificial intelligence</p>
                <p className="mb-1 text-white/50 text-sm">Digital Consulting</p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Products</h4>
                <p className="mb-1 text-white/50 text-sm">Spout</p>
                <p className="mb-1 text-white/50 text-sm">E-Farm</p>
                <p className="mb-1 text-white/50 text-sm">CPsongs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-10 md:mt-20 gap-4">
            <p className="text-white/50 text-sm">© 2024 C.Presolver 2026</p>
            <div className="flex flex-row flex-wrap gap-4 sm:gap-8">
              <li className="list-none text-white/50 text-sm">Sitemap</li>
              <li className="list-none text-white/50 text-sm">Contact CPresolver</li>
              <li className="list-none text-white/50 text-sm">Privacy Policy</li>
              <li className="list-none text-white/50 text-sm">Terms and conditions</li>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}