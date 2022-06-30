import styles from './intro.module.scss'
import Image from 'next/image'
import image from '/public/images/steve-im-wald-min.jpg'

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <figure>
          <Image
            src={image}
            alt="Steve Frenzel, web developer"
            width={500}
            height={500}
          />
        </figure>
        <div className={styles.text}>
          <h1>
            Steve Frenzel - <br /> Web Developer
          </h1>
          <br />
          <p>
            I help companies and organisations to build modern, robust and
            accessible websites.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
