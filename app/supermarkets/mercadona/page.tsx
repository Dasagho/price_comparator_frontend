import React from 'react'
import ProductList from '@/src/components/product-list/product-list'
import { SuperMarkets } from '@/src/types/superMarkets'
import style from '@/app/supermarkets/supermarkets.module.css'
export default function Mercadona() {
  return (
    <>
      <h2 className={style.title}>{SuperMarkets.Mercadona}</h2>
      <ProductList market={SuperMarkets.Mercadona} />
    </>
  )
}
