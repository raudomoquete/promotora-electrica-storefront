"use client";

import Image from "next/image";
import type { CartLine } from "@/types/catalog";
import { formatDop } from "@/lib/formatMoney";
import { useCart } from "@/lib/cart-context";
import styles from "./CartLineRow.module.css";

export function CartLineRow({ line }: { line: CartLine }) {
  const { updateQuantity, removeLine } = useCart();

  return (
    <article className={styles.row}>
      <div className={styles.thumb}>
        <Image src={line.image} alt="" fill sizes="112px" />
      </div>
      <div className={styles.info}>
        <h2>{line.name}</h2>
        <p className={styles.options}>
          {line.alcanceLabel} · {line.plazoLabel} · {line.modalidadLabel}
        </p>
        <div className={styles.controls}>
          <div className={styles.qty}>
            <button
              type="button"
              aria-label="Disminuir"
              onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
            >
              −
            </button>
            <span>{line.quantity}</span>
            <button
              type="button"
              aria-label="Aumentar"
              onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn-link"
            onClick={() => removeLine(line.lineId)}
          >
            Quitar
          </button>
        </div>
      </div>
      <div className={styles.totals}>
        <p className={styles.unit}>{formatDop(line.unitPriceDop)} / u.</p>
        <p className={styles.lineTotal}>
          {formatDop(line.unitPriceDop * line.quantity)}
        </p>
      </div>
    </article>
  );
}
