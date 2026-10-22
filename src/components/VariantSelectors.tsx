"use client";

import type { CatalogProduct } from "@/types/catalog";
import styles from "./VariantSelectors.module.css";

interface Props {
  product: CatalogProduct;
  alcanceId: string;
  plazoId: string;
  modalidadId: string;
  onAlcanceChange: (id: string) => void;
  onPlazoChange: (id: string) => void;
  onModalidadChange: (id: string) => void;
}

export function VariantSelectors({
  product,
  alcanceId,
  plazoId,
  modalidadId,
  onAlcanceChange,
  onPlazoChange,
  onModalidadChange,
}: Props) {
  const isAssets = product.sku === "PRE-ACT-005";
  const plazoOptions = isAssets
    ? product.variants.plazo.filter((o) => {
        if (o.id === "retainer-12-meses") {
          return alcanceId === "retainer-24-7";
        }
        return true;
      })
    : product.variants.plazo;

  return (
    <div className={styles.grid}>
      <div className="field">
        <label htmlFor="alcance">Alcance</label>
        <select
          id="alcance"
          value={alcanceId}
          onChange={(e) => onAlcanceChange(e.target.value)}
        >
          {product.variants.alcance.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="plazo">Plazo</label>
        <select
          id="plazo"
          value={plazoId}
          onChange={(e) => onPlazoChange(e.target.value)}
        >
          {plazoOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="modalidad">Modalidad</label>
        <select
          id="modalidad"
          value={modalidadId}
          onChange={(e) => onModalidadChange(e.target.value)}
        >
          {product.variants.modalidad.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
