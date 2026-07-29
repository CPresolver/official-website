"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import NeuralBrain from "@/components/NeuralBrain"

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans ">
        <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-10 px-6 md:px-16 sm:items-start">
          <Navbar />

          <div className="pb-10 pt-16 md:pb-20 md:pt-40 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="">
                <p className="mb-2 text-lg">{t('banner.title')}</p>
                <h1 className="text-2xl text-white/40">CPresolver</h1>
                <p className="text-3xl md:text-5xl mb-6">
                  {t('banner.description')}
                </p>

                <div className="relative w-fit">
                  <div className="absolute inset-0 border bg-[#F2EFEF] opacity-50 border-white/30 translate-x-2 translate-y-2 -z-10" />
                  <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4">
                    {t('banner.button')}
                    <Image
                      src="/images/icons/arrow_forward.png"
                      alt="Arrow Right"
                      width={40}
                      height={30}
                      className="inline-block ml-2"
                    />
                  </button>
                </div>
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


            <div className="border border-white/20 p-3 mt-6 md:mt-0 ml-0 md:ml-12 bg-[#1A1A1A]">
              <h2 className="text-lg md:text-xl text-center mb-2 text-medium">
                {t('banner.title_qoute')}
              </h2>
              <p className="text-2xl md:text-4xl text-center">
                {t('banner.quote')}
              </p>
            </div>
          </div >
        </main >
      </div >

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/original-ae72b4ea7eed5c28c8aeb6d5153ab50f.png"
            alt="Banner"
            width={500}
            height={300}
            className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
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
                src="/images/icons/arrow_forward.png"
                alt="Arrow Right"
                width={40}
                height={30}
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
                src="/images/icons/arrow_forward.png"
                alt="Arrow Right"
                width={40}
                height={30}
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
            className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
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
            className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
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
                src="/images/icons/arrow_forward.png"
                alt="Arrow Right"
                width={40}
                height={30}
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
                    src="/images/icons/icon_tech.png"
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
                    src="/images/icons/icon_tech.png"
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
                    src="/images/icons/icon_tech.png"
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
                    src="/images/icons/icon_tech.png"
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
                src="/images/icons/arrow_forward.png"
                alt="Arrow Right"
                width={40}
                height={30}
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
            className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
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
              className="w-[140px] sm:w-[180px] md:w-[200px] h-auto"
            />

            <Image
              src="/images/solutions/e_farm.png"
              alt="Banner"
              width={200}
              height={100}
              className="w-[140px] sm:w-[180px] md:w-[200px] h-auto"
            />

            <Image
              src="/images/solutions/CPsongs.png"
              alt="Banner"
              width={200}
              height={100}
              className="w-[140px] sm:w-[180px] md:w-[200px] h-auto"
            />
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  )
}