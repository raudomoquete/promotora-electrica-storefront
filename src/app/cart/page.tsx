import type { Metadata } from "next";
import { CartView } from "./CartView";
import styles from "./page.module.css";

export const metadata: Metadata = {};

export default function CartPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1>Carrito</h1>
      <CartView />
    </div>
  );
}
