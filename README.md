# Promotora Eléctrica — storefront académico

Catálogo de servicios de transmisión eléctrica (demo PUCMM). Next.js 15 App Router + TypeScript. Carrito en `localStorage` (`promotora-cart-v1`). Checkout académico sin pasarela.

Nombre canónico (doc): `experience_promotora_electrica_storefront`.

## Requisitos

- Node.js ≥ 20 LTS

## Desarrollo local

```bash
cd promotora-electrica-storefront
cp .env.example .env.local
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero marca + grid de 6 servicios |
| `/catalog` | Listado |
| `/catalog/[sku]` | Detalle PRE-* con variantes |
| `/cart` | Carrito |
| `/checkout` | Solicitud académica |

## Assets

Origen en Project store `media/{brand,hero,catalog}/`. Destino app: `public/{brand,hero,catalog}/`. Fotos de catálogo: origen `generated`.

## Deploy

```bash
# Vercel (preferido)
npx vercel --prod

# Netlify
npx netlify deploy --prod --build
```

Setear `NEXT_PUBLIC_SITE_URL` al HTTPS definitivo en el host.

## Marca

Promotora Eléctrica — grafito `#1C232B` + cobre `#C47A3A`. Sin identidad ETED ni Voltara.
