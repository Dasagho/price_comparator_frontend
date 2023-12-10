import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import './globals.css'
import TopMenu from '@/src/components/top-menu/top-menu'
import { usePathname } from 'next/navigation'
import ReturnButton from '@/src/components/return-button/return-button'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Comparador de precios',
  description: 'Un comparador de precios de productos de supermercados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <TopMenu />
        <ReturnButton />
        <main className={styles.body}>{children}</main>
      </body>
    </html>
  )
}
