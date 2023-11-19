import React from 'react'
import ProductList from '../components/ProductList/ProductList'
import { SuperMarkets } from '@/src/types/superMarkets'

export default function Mercadona() {
  return <ProductList market={SuperMarkets.Mercadona} />
}
