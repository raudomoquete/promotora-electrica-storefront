"use client";

import { useEffect, useMemo, useState } from "react";
import type { CatalogProduct } from "@/types/catalog";
import { computeUnitPrice } from "@/data/catalog";
import { formatDop } from "@/lib/formatMoney";
import { useCart } from "@/lib/cart-context";
import { VariantSelectors } from "./VariantSelectors";
import styles from "./AddToCartButton.module.css";

export function AddToCartPanel({ product }: { product: CatalogProduct }) {
  const { addLine, toast } = useCart();
  const [alcanceId, setAlcanceId] = useState(product.variants.alcance[0].id);
  const [plazoId, setPlazoId] = useState(product.variants.plazo[0].id);
  const [modalidadId, setModalidadId] = useState(product.variants.modalidad[0].id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.sku !== "PRE-ACT-005") return;
    if (alcanceId !== "retainer-24-7" && plazoId === "retainer-12-meses") {
      setPlazoId("informe-15-dias");
    }
  }, [alcanceId, plazoId, product.sku]);

  const unitPrice = useMemo(
    () => computeUnitPrice(product, alcanceId, plazoId, modalidadId),
    [product, alcanceId, plazoId, modalidadId],
  );

  const alcance = product.variants.alcance.find((o) => o.id === alcanceId)!;
  const plazo = product.variants.plazo.find((o) => o.id === plazoId)!;
  const modalidad = product.variants.modalidad.find((o) => o.id === modalidadId)!;

  return (
    <div className={styles.wrap}>
      <p>
        Precio unitario: <strong>{formatDop(unitPrice)}</strong>
      </p>
      <VariantSelectors
        product={product}
        alcanceId={alcanceId}
        plazoId={plazoId}
        modalidadId={modalidadId}
        onAlcanceChange={setAlcanceId}
        onPlazoChange={setPlazoId}
        onModalidadChange={setModalidadId}
      />
      <div className={styles.qtyRow} aria-label="Cantidad">
        <button
          type="button"
          aria-label="Disminuir cantidad"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span className={styles.qty}>{quantity}</span>
        <button
          type="button"
          aria-label="Aumentar cantidad"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() =>
          addLine({
            sku: product.sku,
            name: product.name,
            image: product.image,
            alcanceId,
            plazoId,
            modalidadId,
            alcanceLabel: alcance.label,
            plazoLabel: plazo.label,
            modalidadLabel: modalidad.label,
            unitPriceDop: unitPrice,
            quantity,
          })
        }
      >
        Añadir al carrito
      </button>
      <p className={styles.toast} aria-live="polite">
        {toast ?? ""}
      </p>
    </div>
  );
}
