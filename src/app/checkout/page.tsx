import type { Metadata } from "next";
import { CheckoutForm } from "@/components/CheckoutForm";
import styles from "./page.module.css";

export const metadata: Metadata = {};

export default function CheckoutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1>Solicitud de pedido (demo académica)</h1>
      <p className={`muted ${styles.lead}`}>
        Complete los datos de contacto. No se realiza cobro; el resumen queda
        en pantalla como evidencia de flujo.
      </p>
      <CheckoutForm />
    </div>
  );
}
