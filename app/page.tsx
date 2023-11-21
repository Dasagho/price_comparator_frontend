'use client'
import style from '@/app/page.module.css'
import CoolCard from '../src/components/cool-card/cool-card'
import Link from 'next/link'

export default function Home() {

  return (
    <main className={style.main}>
      <h1>Price comparator</h1>
      <section className={style.lists}>
        <Link href="/mercadona">
        <CoolCard
          cardUrl="/mercadona-vertical-card.png"
          logoUrl="/mercadona-logo.png"
        />
        </Link>
        <Link href="/consum">
        <CoolCard
          cardUrl="/consum-vertical-card.png"
          logoUrl="/consum-logo.png"
        />
        </Link>
      </section>
    </main>
  )
}
