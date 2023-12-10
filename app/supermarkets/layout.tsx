import ReturnButton from '@/src/components/return-button/return-button'
import style from './supermarkets.module.css'

export default function MarketLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}
