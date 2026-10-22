import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>Promotora Eléctrica, S.R.L.</p>
        <p className={styles.tagline}>Ingeniería que conecta el país</p>
      </div>
    </footer>
  );
}
