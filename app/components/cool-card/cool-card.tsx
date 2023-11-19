import React from 'react'
import style from './cool-card.module.css'

interface CoolCardProps {
  logoUrl: string
  cardUrl: string
  onClick: () => void
}

const CoolCard: React.FC<CoolCardProps> = ({ logoUrl, cardUrl, onClick }) => {
  return (
    <article className={style.card_wrapper} onClick={onClick}>
      <img src={cardUrl} />
      <img src={logoUrl} />
    </article>
  )
}

export default CoolCard
