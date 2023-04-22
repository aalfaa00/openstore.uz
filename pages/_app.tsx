import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { Open_Sans } from "next/font/google";
import Head from 'next/head';
import "slick-carousel/slick/slick.css";



const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${open_sans.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
    </>
  )
}
