import CoolCard from '@/src/components/cool-card/cool-card'
import Link from 'next/link'
import React from 'react'
import style from './supermarkets.module.css'

const Supermarkets: React.FC = () => {
  return (
    <div className={style.lists}>
      <Link href="/market/mercadona">
        <CoolCard
          cardUrl="/mercadona-vertical-card.png"
          logoUrl="/mercadona-logo.png"
        />
      </Link>
      <Link href="/market/consum">
        <CoolCard
          cardUrl="/consum-vertical-card.png"
          logoUrl="/consum-logo.png"
        />
      </Link>
    </div>
  )
}

export default Supermarkets
