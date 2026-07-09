import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../assets/oladejo abdulrahman.png';

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.subTitle}>Hi, my name is</p>
          <h1 className={styles.mainTitle}>Oladejo Abdulrahman Olawale.</h1>
          <h2 className={styles.tagLine}>Crafting Premium Digital Experiences.</h2>
          
          <p className={styles.description}>
            I am an elite Frontend Developer based in Nigeria, specializing in building high-fidelity, 
            responsive, and modern web architectures. Utilizing robust technologies like 
            <span className={styles.highlight}> React.jsx</span>, I transform complex ideas into flawless user interfaces.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryCta}>
              View Live Showcases
            </a>
            <a href="mailto:abdulrahmanoladejo293@gmai.com" className={styles.secondaryCta}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.frameContainer}>
            <img 
              src={profileImg} 
              alt="Oladejo Abdulrahman Olawale" 
              className={styles.profilePic} 
            />
            <div className={styles.frameOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
