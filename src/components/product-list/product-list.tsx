'use client'
import React, { useEffect, useState } from 'react'
import { SuperMarkets } from '@/src/types/superMarkets'
import style from '@/src/components/product-list/ProductList.module.css'
import Product from '@/src/models/product'
import ProductService from '@/src/services/product-service'

interface ProductListProps {
  market: SuperMarkets
}

export const ProductList: React.FC<ProductListProps> = ({ market }) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    retrieveProducts()
  }, [])

  async function retrieveProducts() {
    const retrievedProducts = await ProductService.getProducts(market)
    setProducts(retrievedProducts)
  }

  return (
    <section className={style.list}>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
