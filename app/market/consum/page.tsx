import React from 'react'
import ProductList from '@/src/components/product-list/product-list'
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
