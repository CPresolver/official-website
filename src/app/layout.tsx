import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const Typold = localFont({
  src: [
    {
      path: "../../public/fonts/typold/The Northern Block Ltd - Typold Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/typold/The Northern Block Ltd - Typold Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/typold/The Northern Block Ltd - Typold Black Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
})

const GolosText = localFont({
  src: "../../public/fonts/GolosText-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CPresolver",
  description: "Making us the best of yesterday",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages();

  return (
    <html
      className={`${Typold.variable} ${GolosText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/background.png')" }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}