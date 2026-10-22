import { catalog } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import styles from "./HomeServices.module.css";

export function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="servicios-heading">
      <div className="container">
        <div className={styles.intro}>
          <h2 id="servicios-heading">Servicios de transmisión</h2>
          <p className="muted">
            Seis paquetes con alcance, plazo y modalidad.
          </p>
        </div>
        <div className={styles.grid}>
          {catalog.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
