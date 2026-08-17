import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} <span>Juste Amour.</span>
        </p>

        <nav className={styles.links} aria-label="Réseaux sociaux">
          <a
            href="https://github.com/aurelienec"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/john-doe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}