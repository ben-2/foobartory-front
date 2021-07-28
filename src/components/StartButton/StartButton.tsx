import styles from './StartButton.module.css';
import { FormattedMessage } from 'react-intl';
import { useStoreState, useStoreActions } from '../../hooks';

export function StartButton() {
  const startGame = useStoreActions((actions) => actions.startGame);

  return (
    <>
      <div className={styles.subtitle} >
        <button onClick={(event) => startGame()}>
          <FormattedMessage id="startGame" />
        </button>
      </div>
    </>
  );
}
