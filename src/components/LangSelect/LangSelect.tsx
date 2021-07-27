import styles from './LangSelect.module.css';
import { useStoreState } from 'easy-peasy';

export function LangSelect() {
  const lang = useStoreState((state) => state.lang);

  return (
    <>
      <div className={styles.title}>
        Selecteur de langue
      </div>
    </>
  );
}
