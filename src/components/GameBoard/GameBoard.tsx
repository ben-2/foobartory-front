import styles from './GameBoard.module.css';
import Robots from '../Robots';
import Counters from '../Counters';

export function GameBoard() {
  return (
    <>
      <div className={styles.subtitle}>
        <Robots />
        <Counters />
      </div>
    </>
  );
}
