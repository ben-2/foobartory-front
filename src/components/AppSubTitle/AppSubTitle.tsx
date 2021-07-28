import styles from './AppSubTitle.module.css';
import { FormattedMessage } from 'react-intl';

export function AppSubTitle() {
  return (
    <>
      <div className={styles.subtitle}>
        <FormattedMessage id="subtitle" />
      </div>
    </>
  );
}
