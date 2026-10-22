"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartBadge } from "./CartBadge";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <img
            src="/brand/logo-mark.svg"
            alt="Promotora Eléctrica"
            width={28}
            height={28}
            className={styles.mark}
            decoding="async"
          />
          <span className={styles.brandText} aria-hidden="true">
            Promotora Eléctrica
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          <Link
            href="/catalog"
            aria-current={pathname.startsWith("/catalog") ? "page" : undefined}
          >
            Catálogo
          </Link>
          <Link
            href="/cart"
            className={styles.cartLink}
            aria-current={pathname === "/cart" ? "page" : undefined}
          >
            Carrito
            <CartBadge />
          </Link>
        </nav>
      </div>
    </header>
  );
}
