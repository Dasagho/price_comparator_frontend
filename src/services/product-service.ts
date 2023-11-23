import axios from 'axios'
import Product from '@/src/models/product'

const ProductService = {
  getProducts,
}
export default ProductService

async function getProducts(
  supermarket: string = '',
  limit: number = 20,
  offset: number = 0
): Promise<Product[]> {
  const url = 'http://localhost:3001/product'
  try {
    const response = await axios.get<Product[]>(url, {
      params: { limit, offset, supermarket },
    })
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
