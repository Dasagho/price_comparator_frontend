import { SuperMarkets } from '@/src/types/superMarkets'
import style from '@/app/ProductList/ProductList.module.css'
interface ProductListProps {
    market: SuperMarkets
}

export const ProductList: React.FC<ProductListProps> = ({ market }) => {
    return (
        <section
            className={style.list}
        >
            <h3>{market}</h3>
            <ul>
                {[...Array(10)].map((_, i) => (
                    <li key={i}>Product {i + 1}</li>
                ))}
            </ul>
        </section>
    )
}

export default ProductList