import React from 'react';
import styles from './About.module.css';

export default function About() {
  const coreSkills = ['React.jsx', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Modules'];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Professional Journey</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.badge}>Academic Background</span>
              <h3>Undergraduate Profile</h3>
            </div>
            <p className={styles.institution}>Osun State University (UNIOSUN)</p>
            <p className={styles.cardText}>
              Developing strong problem-solving frameworks and foundational theoretical insights 
              while pursuing my undergraduate degree, enabling me to handle complex structural logic 
              efficiently.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.badge}>Technical Core</span>
              <h3>Frontend Training</h3>
            </div>
            <p className={styles.institution}>Samic Tech Hub</p>
            <p className={styles.cardText}>
              Completed rigorous, specialized training in modern web development architectures. 
              Mastered component-driven workflows, clean state optimization, and fast modern interfaces.
            </p>
          </div>
        </div>

        <div className={styles.skillsWrapper}>
          <h4 className={styles.skillsTitle}>Engineered Core Technologies</h4>
          <div className={styles.skillsGrid}>
            {coreSkills.map((skill, index) => (
              <div key={index} className={styles.skillTag}>
                <span className={styles.bullet}>▫</span> {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
