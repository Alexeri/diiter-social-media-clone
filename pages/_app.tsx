import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Head from "next/head";

import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import EditModal from '@/components/modals/EditModal'
import DisplayModal from '@/components/modals/DisplayModal'
import AboutModal from '@/components/modals/AboutModal'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Ditter</title>
      </Head>
      <Toaster/>
      <AboutModal/>
      <DisplayModal/>
      <EditModal/>
      <RegisterModal/>
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </ThemeProvider>
  )
}
