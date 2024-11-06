import './globals.css'
import '@radix-ui/themes/styles.css'

import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Layout } from '@/components'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Layout>{children}</Layout>
          <Toaster />
        </Theme>
      </body>
    </html>
  )
}
