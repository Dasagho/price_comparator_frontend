import style from '@/app/page.module.css'
import CoolRotatingObject from '@/src/components/cool-rotating-object/cool-rotating-object'

export default function Home() {
  return (
    <main className={style.main}>
      <CoolRotatingObject width={700} height={400} />
    </main>
  )
}
