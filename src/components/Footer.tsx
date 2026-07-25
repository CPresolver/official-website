"use client"

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Home');

  return (
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
  )
}