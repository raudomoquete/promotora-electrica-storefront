import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalog, getProductBySku } from "@/data/catalog";
import { AddToCartPanel } from "@/components/AddToCartPanel";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ sku: string }>;
}

export function generateStaticParams() {
  return catalog.map((p) => ({ sku: p.sku }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sku } = await params;
  const product = getProductBySku(sku);
  if (!product) return { title: "Servicio no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { sku } = await params;
  const product = getProductBySku(sku);
  if (!product) notFound();

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.media}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
        />
      </div>
      <div className={styles.content}>
        <h1>{product.name}</h1>
        <p className={styles.meta}>
          {product.sku} · {product.lineOfBusiness}
        </p>
        <p className={styles.description}>{product.description}</p>
        <AddToCartPanel product={product} />
        <Link href="/catalog" className={styles.back}>
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
