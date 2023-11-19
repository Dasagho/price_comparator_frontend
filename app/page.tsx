import ProductList from "@/app/components/ProductList/ProductList";
import style from "@/app/page.module.css";
import { SuperMarkets } from "@/src/types/superMarkets";

export default function Home() {
  return (
    <main className={style.main}>
      <h1>Comparador de precios</h1>
      <section className={style.lists}>
        <ProductList market={SuperMarkets.Mercadona} />
        <ProductList market={SuperMarkets.Consum} />
        <ProductList market={SuperMarkets.Lidl} />
      </section>
    </main>
  );
}
