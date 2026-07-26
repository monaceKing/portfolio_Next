import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis{" "}
          <span className={styles.highlight}>
            Juste Monace MAVOUNGOU-MBATCHI
          </span>
        </h1>
        <p className={styles.heroSubtitle}>Responsable projet informatique</p>
        <p className={styles.heroDescription}>
          Professionnel de l&apos;informatique, j&apos;allie expertise technique
          et gestion de projets pour concevoir des applications web modernes,
          performantes et adaptées aux besoins, avec React, Next.js, Angular et
          Laravel.
        </p>
        <div className={styles.heroButtons}>
          <a href="projects" className={`${styles.btn} ${styles.btnSecondary}`}>
            Voir mes projets
          </a>
          <a href="contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
