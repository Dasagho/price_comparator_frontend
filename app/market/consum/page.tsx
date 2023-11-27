import React from 'react'
import ProductList from '@/src/components/ProductList/ProductList'
import { SuperMarkets } from '@/src/types/superMarkets'
import style from '@/app/market/market.module.css'

export default function Consum() {
  return (
    <>
      <h2 className={style.title}>{SuperMarkets.Consum}</h2>
      <ProductList market={SuperMarkets.Consum} />
    </>
  )
}
