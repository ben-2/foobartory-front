import styles from './GameBoard.module.css';
import Robots from '../Robots';

export function GameBoard() {
  return (
    <>
      <div className={styles.subtitle}>
        <Robots />
      </div>
    </>
  );
}
