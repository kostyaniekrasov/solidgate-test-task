import styles from './Header.module.scss';
import { useAlert } from '@/hooks';

const Header = () => {
  const { addAlert } = useAlert();
  return (
    <header className={styles.header}>
      <div className={styles.headerLangWrapper}>
        <div className={styles.headerButtonWrapper}>
          <button
            className={styles.headerButton}
            onClick={() =>
              addAlert('error', `Changing the language doesn't work yet`)
            }
          >
            Eng
          </button>
        </div>

        <div className={styles.headerButtonWrapper}>
          <button
            className={`${styles.headerButton} ${styles.headerButtonActive}`}
            onClick={() =>
              addAlert('error', `Changing the language doesn't work yet`)
            }
          >
            Укр
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
