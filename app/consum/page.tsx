import React from 'react'
import ProductList from '../../src/components/ProductList/ProductList'
import { SuperMarkets } from '@/src/types/superMarkets'

export default function Consum() {
  return <ProductList market={SuperMarkets.Consum} />
}
