import axios from 'axios'
import Product from '../models/product'

export async function getProducts(
  limit: number = 20,
  offset: number = 0
): Promise<Product> {
  const url = 'http://localhost:3001/products'
  const response = await axios.get<Product>(url, {
    params: { limit, offset },
  })
  return response.data
}
