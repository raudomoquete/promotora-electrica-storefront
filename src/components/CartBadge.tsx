"use client";

import { useCart } from "@/lib/cart-context";
import styles from "./CartBadge.module.css";

export function CartBadge() {
  const { ready, itemCount, pulse } = useCart();
  if (!ready || itemCount < 1) return null;
  return (
    <span className={`${styles.badge} ${pulse ? styles.pulse : ""}`} aria-live="polite">
      {itemCount}
    </span>
  );
}
