import styles from './contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2>Contact</h2>
        <p>
          Interested in working together? Then feel free to send me an{' '}
          <a href="mailto:stevefrenzel@mailbox.org" rel="noopener noreferrer">
            e-mail
          </a>
          . Alternatively, you can reach me on{' '}
          <a
            href="https://www.linkedin.com/in/stevefrenzel/"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{' '}
          <a href="https://twitter.com/stvfrnzl" rel="noopener noreferrer">
            Twitter
          </a>{' '}
          and <a href="https://github.com/stevefrenzel">GitHub</a>. I look
          forward to hearing from you!
        </p>
      </div>
    </section>
  )
}

export default Contact
