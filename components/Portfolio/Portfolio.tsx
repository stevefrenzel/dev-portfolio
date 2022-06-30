import Card from '@components/Card'
import styles from './portfolio.module.scss'
import projects from '@data/projects'

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.text}>
          <h2>Portfolio</h2>
          <p>Check out some of the projects I have been involved with:</p>
        </div>
        {projects.map((item, index) => (
          <Card
            key={index}
            webUrl={item.url}
            imageUrl={item.image}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
