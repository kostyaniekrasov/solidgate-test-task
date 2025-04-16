import styles from './Footer.module.scss';
import { SolidLogoIcon } from '@/assets';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>Powered by</p>

      <SolidLogoIcon />
    </footer>
  );
};

export default Footer;
