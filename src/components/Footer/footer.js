// src/components/Footer/footer.js
import React from 'react';
import styles from './footer.module.css'; // Importando os estilos como um módulo

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} Pyscript.tech. Todos os direitos reservados.</p>
        
        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>Home</a>
          <a href="/services" className={styles.footerLink}>Serviços</a>
          <a href="/projects" className={styles.footerLink}>Projetos</a>
          <a href="/contact" className={styles.footerLink}>Contato</a>
        </div>
        
        <div className={styles.footerSocials}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
