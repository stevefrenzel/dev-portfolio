import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './card.module.scss'

type Props = {
  webUrl: string
  imageUrl?: string
  videoUrl?: string
  heading: string
  description: string
}

const Card: NextPage<Props> = ({
  webUrl,
  imageUrl,
  //   videoUrl,
  heading,
  description,
}) => {
  return (
    <a href={webUrl} className={styles.container}>
      <article className={styles.card}>
        {/* <div className={styles.card_inner}> */}
        <figure>
          <Image src={imageUrl!} alt={description} width={1500} height={951} />
        </figure>
        <div className={styles.text}>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
        {/* </div> */}
      </article>
    </a>
  )
}

export default Card
