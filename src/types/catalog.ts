export type CurrencyCode = "DOP";

export type VariantDimension = "alcance" | "plazo" | "modalidad";

export interface VariantOption {
  id: string;
  label: string;
  priceDeltaDop: number;
}

export interface CatalogProduct {
  sku: string;
  slug: string;
  name: string;
  lineOfBusiness: string;
  shortDescription: string;
  description: string;
  priceBaseDop: number;
  currency: CurrencyCode;
  image: string;
  imageAlt: string;
  imageOrigin: "generated" | "captured" | "illustrated";
  variants: {
    alcance: VariantOption[];
    plazo: VariantOption[];
    modalidad: VariantOption[];
  };
}

export interface CartLine {
  lineId: string;
  sku: string;
  name: string;
  image: string;
  alcanceId: string;
  plazoId: string;
  modalidadId: string;
  alcanceLabel: string;
  plazoLabel: string;
  modalidadLabel: string;
  unitPriceDop: number;
  quantity: number;
}

export interface CartState {
  version: 1;
  lines: CartLine[];
  updatedAt: string;
}

export interface CheckoutForm {
  fullName: string;
  email: string;
  organization: string;
  notes: string;
}
