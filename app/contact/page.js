import ContactForm from "./ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>PARLONS-EN</span>

        <h1 className={styles.title}>Me contacter</h1>

        <p className={styles.description}>
          Une question, une idée ou un projet en tête ?
          <br />
          Échangeons et voyons comment lui donner vie.
        </p>
      </div>

      <div className={styles.contactWrapper}>
        <aside className={styles.contactInfo}>
          <div>
            <span className={styles.infoEyebrow}>MES COORDONNÉES</span>
            <h2>Restons en contact.</h2>

            <p className={styles.infoDescription}>
              Je suis toujours ouvert à discuter d&apos;un projet, d&apos;une
              collaboration ou simplement à échanger autour du développement
              et de la tech.
            </p>
          </div>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>@</span>

              <div>
                <span className={styles.label}>Email</span>
                <a href="mailto:justeamour05@gmail.com">
                  justeamour05@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>in</span>

              <div>
                <span className={styles.label}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/juste-mavoungou/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Juste Amour MAVONGOU-MBATCHI
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>GH</span>

              <div>
                <span className={styles.label}>GitHub</span>
                <a
                  href="https://github.com/monaceKing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  monaceKing
                </a>
              </div>
            </div>
          </div>

          <div className={styles.decoration} />
        </aside>

        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Envoyer un message</h2>
            <p>
              Quelques lignes suffisent pour me donner une première idée de
              votre projet.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}