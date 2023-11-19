'use client'
import style from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
import CoolCard from './components/cool-card/cool-card'

export default function Home() {
  const router = useRouter()

  function navigateToMercadona(): void {
    router.push('/mercadona')
  }

  function navigateToConsum(): void {
    router.push('/consum')
  }

  return (
    <main className={style.main}>
      <h1>Price comparator</h1>
      <section className={style.lists}>
        <CoolCard
          cardUrl="/mercadona-vertical-card.png"
          logoUrl="/mercadona-logo.png"
          onClick={navigateToMercadona}
        />
        <CoolCard
          cardUrl="/consum-vertical-card.png"
          logoUrl="/consum-logo.png"
          onClick={navigateToConsum}
        />
      </section>
    </main>
  )
}
