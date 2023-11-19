import style from '@/app/page.module.css'

export default function Home() {
  return (
    <main className={style.main}>
      <h1>Price comparator</h1>
      <section className={style.lists}>
        <article className={style.card_wrapper}>
          <img src="/mercadona-vertical-card.png" />
          <img src="/mercadona-logo.png" />
        </article>
        <article className={style.card_wrapper}>
          <img src="/consum-vertical-card.png" />
          <img src="/consum-logo.png" />
        </article>
      </section>
    </main>
  )
}
