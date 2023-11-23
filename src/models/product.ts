import { SuperMarkets } from '../types/superMarkets'

export default interface Product {
  name: string
  description: string
  price: number
  img: string
  supermarket: SuperMarkets
}
