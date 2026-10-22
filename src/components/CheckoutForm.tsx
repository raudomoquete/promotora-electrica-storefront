"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatDop } from "@/lib/formatMoney";
import { makeOrderNumber } from "@/lib/cart";
import type { CheckoutForm as CheckoutFormData } from "@/types/catalog";
import styles from "./CheckoutForm.module.css";

export function CheckoutForm() {
  const { ready, lines, totalDop, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    organization: "",
    notes: "",
  });
  const [orderId, setOrderId] = useState<string | null>(null);
  const [confirmedLines, setConfirmedLines] = useState(lines);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const confirmedSum = useMemo(
    () =>
      confirmedTotal ||
      confirmedLines.reduce((s, l) => s + l.unitPriceDop * l.quantity, 0),
    [confirmedLines, confirmedTotal],
  );

  if (!ready) {
    return <p className="muted">Cargando carrito…</p>;
  }

  if (orderId) {
    return (
      <div className={styles.success}>
        <h1>Solicitud registrada</h1>
        <p className="muted">
          Pedido académico sin cobro real. Guarde este número de referencia.
        </p>
        <p className={styles.orderId}>{orderId}</p>
        <ul>
          {confirmedLines.map((line) => (
            <li key={line.lineId}>
              {line.name} × {line.quantity} —{" "}
              {formatDop(line.unitPriceDop * line.quantity)}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total: {formatDop(confirmedSum)}</strong>
        </p>
        <Link href="/catalog" className="btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div>
        <p>No hay servicios en el carrito.</p>
        <Link href="/catalog" className="btn" style={{ marginTop: "1rem" }}>
          Ir al catálogo
        </Link>
      </div>
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Nombre y correo son obligatorios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Indique un correo válido.");
      return;
    }
    const id = makeOrderNumber();
    setConfirmedLines(lines);
    setConfirmedTotal(totalDop);
    setOrderId(id);
    clearCart();
  }

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Nombre completo *</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Correo *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="organization">Organización</label>
          <input
            id="organization"
            name="organization"
            value={form.organization}
            onChange={(e) =>
              setForm((f) => ({ ...f, organization: e.target.value }))
            }
          />
        </div>
        <div className="field">
          <label htmlFor="notes">Notas</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          />
        </div>
        <p className={styles.notice}>
          Sin cobro real — entrega académica PUCMM. Los datos permanecen en este
          navegador para la demostración.
        </p>
        {error ? <p role="alert">{error}</p> : null}
        <button type="submit" className="btn">
          Confirmar solicitud
        </button>
      </form>

      <aside className={styles.summary} aria-label="Resumen del pedido">
        <h2>Resumen</h2>
        {lines.map((line) => (
          <div key={line.lineId} className={styles.line}>
            <strong>{line.name}</strong>
            <span className="muted">
              {line.alcanceLabel} · {line.plazoLabel} · {line.modalidadLabel}
            </span>
            <span>
              {line.quantity} × {formatDop(line.unitPriceDop)} ={" "}
              {formatDop(line.unitPriceDop * line.quantity)}
            </span>
          </div>
        ))}
        <p className={styles.total}>Total: {formatDop(totalDop)}</p>
      </aside>
    </div>
  );
}
