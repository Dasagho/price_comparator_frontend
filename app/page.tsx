'use client'
import style from '@/app/page.module.css'
import { useRouter } from 'next/navigation'

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
        <article className={style.card_wrapper} onClick={navigateToMercadona}>
          <img src="/mercadona-vertical-card.png" />
          <img src="/mercadona-logo.png" />
        </article>
        <article className={style.card_wrapper} onClick={navigateToConsum}>
          <img src="/consum-vertical-card.png" />
          <img src="/consum-logo.png" />
        </article>
      </section>
    </main>
  )
}
