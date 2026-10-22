"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartLine, CartState } from "@/types/catalog";
import {
  cartQuantityTotal,
  cartTotalDop,
  emptyCart,
  makeLineId,
  readCartFromStorage,
  writeCartToStorage,
} from "@/lib/cart";

interface CartContextValue {
  ready: boolean;
  lines: CartLine[];
  itemCount: number;
  totalDop: number;
  toast: string | null;
  pulse: boolean;
  addLine: (line: Omit<CartLine, "lineId" | "quantity"> & { quantity?: number }) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(emptyCart);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setState(readCartFromStorage());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeCartToStorage(state);
  }, [state, ready]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2000);
    return () => window.clearTimeout(t);
  }, [toast]);

  const persist = useCallback((lines: CartLine[]) => {
    setState({
      version: 1,
      lines,
      updatedAt: new Date().toISOString(),
    });
  }, []);

  const addLine = useCallback(
    (input: Omit<CartLine, "lineId" | "quantity"> & { quantity?: number }) => {
      const lineId = makeLineId(
        input.sku,
        input.alcanceId,
        input.plazoId,
        input.modalidadId,
      );
      const qty = Math.max(1, Math.floor(input.quantity ?? 1));
      setState((prev) => {
        const existing = prev.lines.find((l) => l.lineId === lineId);
        const lines = existing
          ? prev.lines.map((l) =>
              l.lineId === lineId
                ? { ...l, quantity: l.quantity + qty, unitPriceDop: input.unitPriceDop }
                : l,
            )
          : [
              ...prev.lines,
              {
                ...input,
                lineId,
                quantity: qty,
              },
            ];
        return {
          version: 1,
          lines,
          updatedAt: new Date().toISOString(),
        };
      });
      setToast("Añadido al carrito");
      setPulse(true);
      window.setTimeout(() => setPulse(false), 500);
    },
    [],
  );

  const updateQuantity = useCallback(
    (lineId: string, quantity: number) => {
      const nextQty = Math.max(1, Math.floor(quantity));
      setState((prev) => ({
        version: 1,
        lines: prev.lines.map((l) =>
          l.lineId === lineId ? { ...l, quantity: nextQty } : l,
        ),
        updatedAt: new Date().toISOString(),
      }));
    },
    [],
  );

  const removeLine = useCallback(
    (lineId: string) => {
      setState((prev) => ({
        version: 1,
        lines: prev.lines.filter((l) => l.lineId !== lineId),
        updatedAt: new Date().toISOString(),
      }));
    },
    [],
  );

  const clearCart = useCallback(() => {
    persist([]);
  }, [persist]);

  const value = useMemo<CartContextValue>(
    () => ({
      ready,
      lines: state.lines,
      itemCount: cartQuantityTotal(state.lines),
      totalDop: cartTotalDop(state.lines),
      toast,
      pulse,
      addLine,
      updateQuantity,
      removeLine,
      clearCart,
    }),
    [
      ready,
      state.lines,
      toast,
      pulse,
      addLine,
      updateQuantity,
      removeLine,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
