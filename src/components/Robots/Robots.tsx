import styles from './Robots.module.css';
import Robot from '../Robot';

export function Robots() {
  return (
    <>
      <div className={styles.robots}>
        {['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'].map((i, index) => {
          return <Robot key={index} />;
        })}
      </div>
    </>
  );
}
