import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/types/catalog";
import { formatDop } from "@/lib/formatMoney";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link href={`/catalog/${product.sku}`} className={styles.card}>
      <div className={styles.media}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.desc}>{product.shortDescription}</p>
      <p className={styles.price}>Desde {formatDop(product.priceBaseDop)}</p>
      <span className={styles.cta}>Ver detalle →</span>
    </Link>
  );
}
