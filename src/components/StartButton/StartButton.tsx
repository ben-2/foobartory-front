import styles from './AppSubTitle.module.css';
import { FormattedMessage } from 'react-intl';

export function StartButton() {
  return (
    <>
      <div className={styles.subtitle}>
        <FormattedMessage id="subtitle" />
      </div>
    </>
  );
}
