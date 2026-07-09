import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contentBlock}>
          <span className={styles.overhead}>What is Next?</span>
          <h2 className={styles.mainHeading}>Start A Conversation</h2>
          <p className={styles.pitch}>
            My inbox is permanently open for incoming projects, structural engineering proposals, or general networking opportunities. 
            Get in touch to bring high-performance front-end systems into production.
          </p>

          <div className={styles.commsGrid}>
            <div className={styles.commsCard}>
              <span className={styles.commsLabel}>Direct Line</span>
              <a href="tel:+2349112361728" className={styles.commsValue}>09112361728</a>
            </div>

            <div className={styles.commsCard}>
              <span className={styles.commsLabel}>Electronic Mail</span>
              <a href="mailto:abdulrahmanoladejo293@gmai.com" className={styles.commsValue}>
                abdulrahmanoladejo293@gmai.com
              </a>
            </div>

            <div className={styles.commsCard}>
              <span className={styles.commsLabel}>Base Location</span>
              <span className={styles.commsValue}>Nigeria</span>
            </div>
          </div>

          <div className={styles.actionBlock}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.gitHubCta}
            >
              Review Code Repositories on GitHub
            </a>
          </div>
        </div>

        <footer className={styles.footerBase}>
          <p>© {new Date().getFullYear()} Oladejo Abdulrahman Olawale. Built to elite performance specifications.</p>
        </footer>
      </div>
    </section>
  );
}
