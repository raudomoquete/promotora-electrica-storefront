import Image from "next/image";
import Link from "next/link";
import { CartBadge } from "./CartBadge";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Inicio Promotora Eléctrica">
      <div className={styles.miniNav}>
        <Link href="/catalog">Catálogo</Link>
        <Link href="/cart" style={{ display: "inline-flex", gap: "0.35rem", alignItems: "center" }}>
          Carrito
          <CartBadge />
        </Link>
      </div>
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/hero/hero-transmission.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.brand}>Promotora Eléctrica</h1>
        <p className={styles.headline}>
          Ingeniería de transmisión, lista para contratar
        </p>
        <p className={styles.support}>
          Ingeniería que conecta el país — diseño, obra, mantenimiento y estudios
          en un solo catálogo académico.
        </p>
        <div className={styles.cta}>
          <Link href="/catalog" className="btn">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
