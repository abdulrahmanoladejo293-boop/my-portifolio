import React from 'react';
import styles from './ProjectGrid.module.css';

export default function ProjectGrid() {
  const deployments = [
    {
      title: "Opulence Fashion",
      tagline: "E-Commerce Experience",
      description: "A high-fidelity digital fashion storefront built with ultra-responsive layout structures and premium aesthetic interfaces.",
      url: "https://opulence-fashion-cokc.vercel.app/",
      tech: ["React.jsx", "CSS Modules"]
    },
    {
      title: "Anike's Kitchen",
      tagline: "Culinary & Food App",
      description: "A sleek, highly scannable online culinary deployment featuring rapid asset loading and organized structural asset components.",
      url: "https://anikes-kitchens.vercel.app/",
      tech: ["React.jsx", "JavaScript", "HTML"]
    },
    {
      title: "Business One",
      tagline: "Corporate Landing Platform",
      description: "A crisp corporate solution featuring pixel-perfect components, clean geometric grid alignments, and premium layout spaces.",
      url: "https://business-jxr6.vercel.app/",
      tech: ["React.jsx", "HTML5", "CSS3"]
    },
    {
      title: "Luxury Hotel & Suites",
      tagline: "Hospitality Management System",
      description: "A masterclass hotel presentation site designed with flawless typography, balanced proportions, and seamless interactions.",
      url: "https://luxury-hotel-and-suites-4zcq.vercel.app/",
      tech: ["React.jsx", "Interactive Dom"]
    }
  ];

  return (
    <section id="projects" className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Live Production Showcases</h2>
          <div className={styles.line}></div>
        </div>
        
        <p className={styles.subtitle}>
          Click on any frame to interact directly with the live, deployed web application production environment.
        </p>

        <div className={styles.grid}>
          {deployments.map((project, index) => (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.browserCard}
            >
              <div className={styles.browserHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <div className={styles.urlBar}>{project.url.replace('https://', '')}</div>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.projectTag}>{project.tagline}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techList}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.actionOverlay}>
                  <div className={styles.overlayText}>
                    <span>Launch Live Preview</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
