import ReturnButton from "@/src/components/return-button/ReturnButton";
import style from './market.module.css'


export default function MarketLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className={style.main}>
        <ReturnButton />
        {children}
      </main>
    )
  }