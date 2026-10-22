"use client";

import Link from "next/link";
import { CartLineRow } from "@/components/CartLineRow";
import { useCart } from "@/lib/cart-context";
import { formatDop } from "@/lib/formatMoney";
import styles from "./page.module.css";

export function CartView() {
  const { ready, lines, totalDop } = useCart();

  if (!ready) {
    return <p className="muted">Cargando carrito…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No hay servicios aún</p>
        <Link href="/catalog" className="btn">
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <>
      <div>
        {lines.map((line) => (
          <CartLineRow key={line.lineId} line={line} />
        ))}
      </div>
      <div className={styles.footer}>
        <p className={styles.total}>Total {formatDop(totalDop)}</p>
        <Link href="/checkout" className="btn">
          Ir al checkout
        </Link>
      </div>
    </>
  );
}
