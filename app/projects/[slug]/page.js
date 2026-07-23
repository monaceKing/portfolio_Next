import styles from '../page.module.css'

// Liste de projets (normalement, ça viendrait d'une API ou d'une base de données)
const projects = {
  'portfolio': {
      title: 'Portfolio Personnel',
      slug: 'portfolio',
      //…..
  },
  'ecommerce': {
      title: 'App E-commerce',
      slug: 'ecommerce',
      //…
  },
  'blog': {
      title: 'Blog Technique',
      slug: 'blog',
      //…
  }
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  // Next.js passe automatiquement le slug dans params
  const project = projects[slug]

  // Si le projet n'existe pas, afficher un message
  if (!project) {
      return (
          <div className="container">
              <h1>Projet non trouvé</h1>
              <p>Ce projet n&apos;existe pas ou a été supprimé.</p>
          </div>
      )
  }

  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.content}>
              <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                      Image du projet
                  </div>
              </div>

              <div className={styles.details}>
                  <h2>Technologies utilisées</h2>
                  <div className={styles.technologies}>
                      {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                              {tech}
                          </span>
                      ))}
                  </div>

                  <div className={styles.links}>
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                      >
                          Voir le code →
                      </a>
                      <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.link} ${styles.linkPrimary}`}
                      >
                          Voir la démo →
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}