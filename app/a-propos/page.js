import styles from "./page.module.css";

export default function About() {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Qui suis-je ?</h2>
          <p>
            Ingénieur logiciel de formation et responsable de projets
            informatiques, j&apos;interviens sur le développement,
            l&apos;intégration de solutions et l&apos;analyse des données.
            <br />
            Mon parcours m&apos;a permis de développer une approche polyvalente,
            à la croisée de la technique, de la gestion de projets et de la
            data, avec pour objectif de transformer les besoins en solutions
            concrètes et utiles.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Compétences</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>Angular</li>
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>C# / .NET</li>
                <li>PHP / Laravel</li>
                <li>Python / FastAPI</li>
                <li>Java / Spring</li>
                <li>SQL / Bases de données</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Outils</h3>
              <ul>
                <li>Power BI</li>
                <li>Odoo</li>
                <li>Git / GitHub</li>
                <li>Postman</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
