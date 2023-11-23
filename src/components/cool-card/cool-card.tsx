import React from 'react'
import style from './cool-card.module.css'

interface CoolCardProps {
  logoUrl: string
  cardUrl: string
}

const CoolCard: React.FC<CoolCardProps> = ({ logoUrl, cardUrl }) => {
  return (
    <article className={style.card_wrapper}>
      <img src={cardUrl} />
      <img src={logoUrl} />
    </article>
  )
}

export default CoolCard
