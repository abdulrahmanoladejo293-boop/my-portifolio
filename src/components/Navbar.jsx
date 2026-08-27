import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span>OA.</span>
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
          <a href="#hero" className={styles.navLink} onClick={closeMenu}>Home</a>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          <a href="#projects" className={styles.navLink} onClick={closeMenu}>Showcase</a>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
        </nav>

        <div className={styles.navAction}>
          <a href="#contact" className={styles.ctaButton}>
            Hire Me 
          </a>
        </div>
      </div>
    </header>
  );
}
