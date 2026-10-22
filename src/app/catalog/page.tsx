import type { Metadata } from "next";
import { catalog } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  description:
    "Precios referenciales en DOP. Seis servicios de transmisión con alcance, plazo y modalidad.",
};

export default function CatalogPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1>Catálogo de servicios</h1>
        <p className="muted">Precios referenciales en DOP</p>
      </header>
      <div className={styles.grid}>
        {catalog.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
