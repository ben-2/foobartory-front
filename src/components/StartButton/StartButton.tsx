import styles from './StartButton.module.css';
import { FormattedMessage } from 'react-intl';
import { useStoreActions } from '../../hooks';
import Button from '@material-ui/core/Button';

export function StartButton() {
  const startGame = useStoreActions((actions) => actions.startGame);

  return (
    <>
      <div className={styles.startButton} >
        <Button variant="contained" color="primary" size="large" onClick={(event) => startGame()}>
          <FormattedMessage id="startGame" />
        </Button>
      </div>
    </>
  );
}
