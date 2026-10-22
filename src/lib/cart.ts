import type { CartLine, CartState } from "@/types/catalog";

export const CART_STORAGE_KEY = "promotora-cart-v1";

export function emptyCart(): CartState {
  return {
    version: 1,
    lines: [],
    updatedAt: new Date().toISOString(),
  };
}

export function readCartFromStorage(): CartState {
  if (typeof window === "undefined") {
    return emptyCart();
  }
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return emptyCart();
    const parsed = JSON.parse(raw) as CartState;
    if (parsed.version !== 1 || !Array.isArray(parsed.lines)) {
      return emptyCart();
    }
    return parsed;
  } catch {
    return emptyCart();
  }
}

export function writeCartToStorage(state: CartState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
}

export function cartQuantityTotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

export function cartTotalDop(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.unitPriceDop * line.quantity, 0);
}

export function makeLineId(
  sku: string,
  alcanceId: string,
  plazoId: string,
  modalidadId: string,
): string {
  return `${sku}:${alcanceId}:${plazoId}:${modalidadId}`;
}

export function makeOrderNumber(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const seq = String(Math.floor(Math.random() * 900) + 100);
  return `PRE-${y}${m}${d}-${seq}`;
}
