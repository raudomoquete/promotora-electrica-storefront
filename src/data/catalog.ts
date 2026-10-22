import type { CatalogProduct } from "@/types/catalog";

export const catalog: CatalogProduct[] = [
  {
    sku: "PRE-DIS-001",
    slug: "PRE-DIS-001",
    name: "Diseño e ingeniería de líneas de transmisión",
    lineOfBusiness: "Diseño / ingeniería",
    shortDescription:
      "Estudio y diseño de líneas AT/MT con topografía de corredor, cálculo mecánico-eléctrico y plan de servidumbres.",
    description:
      "Documentar topografía de corredor, cálculo de flechas y esfuerzos, selección de conductor y estructuras, memoria de impacto ambiental y plan de servidumbres. Entregables: planos, memoria de cálculo y cronograma de ingeniería acordado al alcance contratado.",
    priceBaseDop: 185000,
    currency: "DOP",
    image: "/catalog/PRE-DIS-001.webp",
    imageAlt: "Corredor de línea de transmisión en fase de diseño",
    imageOrigin: "generated",
    variants: {
      alcance: [
        { id: "tramo-corto", label: "Tramo corto (≤ 10 km)", priceDeltaDop: 0 },
        {
          id: "corredor-regional",
          label: "Corredor regional (10–50 km)",
          priceDeltaDop: 95000,
        },
        {
          id: "sistema-multi-tramo",
          label: "Sistema multi-tramo",
          priceDeltaDop: 220000,
        },
      ],
      plazo: [
        { id: "4-semanas", label: "4 semanas", priceDeltaDop: 0 },
        { id: "8-semanas", label: "8 semanas", priceDeltaDop: 25000 },
        { id: "12-semanas", label: "12 semanas", priceDeltaDop: 40000 },
      ],
      modalidad: [
        { id: "solo-ingenieria", label: "Solo ingeniería", priceDeltaDop: 0 },
        {
          id: "ingenieria-supervision",
          label: "Ingeniería + supervisión de obra",
          priceDeltaDop: 75000,
        },
      ],
    },
  },
  {
    sku: "PRE-CON-002",
    slug: "PRE-CON-002",
    name: "Construcción y montaje de líneas y subestaciones",
    lineOfBusiness: "Construcción y montaje",
    shortDescription:
      "Ejecución de obra: fundaciones, izado, tendido y puesta en servicio asistida.",
    description:
      "Fundaciones, izado de estructuras, tendido de conductor, montaje de patio de llaves y asistencia a puesta en servicio según el paquete elegido.",
    priceBaseDop: 1250000,
    currency: "DOP",
    image: "/catalog/PRE-CON-002.webp",
    imageAlt: "Montaje de torre de transmisión con grúa en obra",
    imageOrigin: "generated",
    variants: {
      alcance: [
        { id: "linea-aerea", label: "Línea aérea", priceDeltaDop: 0 },
        {
          id: "patio-subestacion",
          label: "Patio de subestación",
          priceDeltaDop: 180000,
        },
        {
          id: "paquete-linea-patio",
          label: "Paquete línea + patio",
          priceDeltaDop: 420000,
        },
      ],
      plazo: [
        { id: "30-dias", label: "Campaña 30 días", priceDeltaDop: 0 },
        { id: "60-dias", label: "Campaña 60 días", priceDeltaDop: 90000 },
        { id: "90-dias", label: "Campaña 90 días", priceDeltaDop: 150000 },
      ],
      modalidad: [
        {
          id: "mo-supervision",
          label: "Mano de obra + supervisión",
          priceDeltaDop: 0,
        },
        {
          id: "llave-en-mano",
          label: "Llave en mano",
          priceDeltaDop: 350000,
        },
      ],
    },
  },
  {
    sku: "PRE-MNT-003",
    slug: "PRE-MNT-003",
    name: "Mantenimiento de líneas y subestaciones",
    lineOfBusiness: "Mantenimiento",
    shortDescription:
      "Mantenimiento predictivo y preventivo con termografía, dron y trabajos en línea según norma.",
    description:
      "Inspección termográfica, vuelo de dron, cambio de aisladores/herrajes, pruebas a transformadores y trabajos en línea energizada cuando la modalidad lo permita.",
    priceBaseDop: 95000,
    currency: "DOP",
    image: "/catalog/PRE-MNT-003.webp",
    imageAlt: "Inspección de aisladores en torre con apoyo de mantenimiento",
    imageOrigin: "generated",
    variants: {
      alcance: [
        { id: "termografia", label: "Inspección termográfica", priceDeltaDop: 0 },
        {
          id: "termografia-dron",
          label: "Inspección + dron",
          priceDeltaDop: 45000,
        },
        {
          id: "campana-correctiva",
          label: "Campaña correctiva (aisladores/herrajes)",
          priceDeltaDop: 120000,
        },
      ],
      plazo: [
        { id: "visita-unica", label: "Visita única", priceDeltaDop: 0 },
        { id: "trimestral", label: "Contrato trimestral", priceDeltaDop: 80000 },
        { id: "anual", label: "Contrato anual", priceDeltaDop: 280000 },
      ],
      modalidad: [
        { id: "desenergizada", label: "Línea desenergizada", priceDeltaDop: 0 },
        {
          id: "hot-line",
          label: "Línea energizada (hot-line)",
          priceDeltaDop: 65000,
        },
      ],
    },
  },
  {
    sku: "PRE-EST-004",
    slug: "PRE-EST-004",
    name: "Estudios eléctricos y de protecciones",
    lineOfBusiness: "Estudios",
    shortDescription:
      "Flujos, cortocircuito, estabilidad y coordinación de protecciones; opcional SCADA.",
    description:
      "Estudios de flujo de potencia, cortocircuito, estabilidad transitoria y coordinación de protecciones, con entrega en PDF o PDF más modelos de simulación según modalidad.",
    priceBaseDop: 288000,
    currency: "DOP",
    image: "/catalog/PRE-EST-004.webp",
    imageAlt: "Diagrama unifilar y banco de relés en laboratorio de estudios",
    imageOrigin: "generated",
    variants: {
      alcance: [
        {
          id: "flujo-cc",
          label: "Flujo + cortocircuito",
          priceDeltaDop: 0,
        },
        {
          id: "mas-estabilidad",
          label: "+ estabilidad",
          priceDeltaDop: 95000,
        },
        {
          id: "protecciones-scada",
          label: "Paquete protecciones + SCADA",
          priceDeltaDop: 175000,
        },
      ],
      plazo: [
        { id: "3-semanas", label: "3 semanas", priceDeltaDop: 0 },
        { id: "6-semanas", label: "6 semanas", priceDeltaDop: 35000 },
        { id: "10-semanas", label: "10 semanas", priceDeltaDop: 60000 },
      ],
      modalidad: [
        { id: "informe-pdf", label: "Informe PDF", priceDeltaDop: 0 },
        {
          id: "informe-modelos",
          label: "Informe + modelos de simulación",
          priceDeltaDop: 48000,
        },
      ],
    },
  },
  {
    sku: "PRE-ACT-005",
    slug: "PRE-ACT-005",
    name: "Gestión de activos y atención de emergencias",
    lineOfBusiness: "Gestión de activos / emergencias",
    shortDescription:
      "Criticidad de activos, plan basado en riesgo y celda de respuesta a fallas.",
    description:
      "Inventario y criticidad, plan de mantenimiento basado en riesgo, y respuesta a fallas con despacho, logística de repuestos y restablecimiento según el alcance contratado.",
    priceBaseDop: 220000,
    currency: "DOP",
    image: "/catalog/PRE-ACT-005.webp",
    imageAlt: "Brigada de respuesta en patio de subestación al anochecer",
    imageOrigin: "generated",
    variants: {
      alcance: [
        { id: "diagnostico", label: "Diagnóstico de activos", priceDeltaDop: 0 },
        {
          id: "plan-anual",
          label: "Plan anual de criticidad",
          priceDeltaDop: 110000,
        },
        {
          id: "retainer-24-7",
          label: "Retainer emergencias 24/7",
          priceDeltaDop: 390000,
        },
      ],
      plazo: [
        { id: "informe-15-dias", label: "Informe 15 días", priceDeltaDop: 0 },
        {
          id: "implementacion-60-dias",
          label: "Implementación 60 días",
          priceDeltaDop: 70000,
        },
        {
          id: "retainer-12-meses",
          label: "Retainer 12 meses",
          priceDeltaDop: 0,
        },
      ],
      modalidad: [
        { id: "remoto-visita", label: "Remoto + visita", priceDeltaDop: 0 },
        { id: "brigada-sitio", label: "Brigada en sitio", priceDeltaDop: 95000 },
      ],
    },
  },
  {
    sku: "PRE-AUT-006",
    slug: "PRE-AUT-006",
    name: "Modernización de protecciones y automatización de patio",
    lineOfBusiness: "Automatización y protecciones digitales",
    shortDescription:
      "Retrofits de relés numéricos, automatización de patio y pruebas punta a punta.",
    description:
      "Modernización de IEDs, esquemas de automatización de patio y pruebas de punta a punta antes de energizar, con o sin suministro según modalidad.",
    priceBaseDop: 410000,
    currency: "DOP",
    image: "/catalog/PRE-AUT-006.webp",
    imageAlt: "Gabinete de relés numéricos e IEDs en sala de control",
    imageOrigin: "generated",
    variants: {
      alcance: [
        { id: "1-bahia", label: "1 bahía", priceDeltaDop: 0 },
        { id: "patio-completo", label: "Patio completo", priceDeltaDop: 280000 },
        {
          id: "patio-teleproteccion",
          label: "Patio + teleprotección",
          priceDeltaDop: 420000,
        },
      ],
      plazo: [
        { id: "4-semanas", label: "4 semanas", priceDeltaDop: 0 },
        { id: "8-semanas", label: "8 semanas", priceDeltaDop: 55000 },
      ],
      modalidad: [
        {
          id: "solo-ing-pruebas",
          label: "Solo ingeniería y pruebas",
          priceDeltaDop: 0,
        },
        {
          id: "suministro-ingenieria",
          label: "Suministro + ingeniería",
          priceDeltaDop: 190000,
        },
      ],
    },
  },
];

export function getProductBySku(sku: string): CatalogProduct | undefined {
  return catalog.find((p) => p.sku === sku || p.slug === sku);
}

export function computeUnitPrice(
  product: CatalogProduct,
  alcanceId: string,
  plazoId: string,
  modalidadId: string,
): number {
  const alcance = product.variants.alcance.find((o) => o.id === alcanceId);
  const plazo = product.variants.plazo.find((o) => o.id === plazoId);
  const modalidad = product.variants.modalidad.find((o) => o.id === modalidadId);
  return (
    product.priceBaseDop +
    (alcance?.priceDeltaDop ?? 0) +
    (plazo?.priceDeltaDop ?? 0) +
    (modalidad?.priceDeltaDop ?? 0)
  );
}
