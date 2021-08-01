import styles from './Robots.module.css';
import Robot from '../Robot';
import { useStoreState } from '../../hooks';

export function Robots() {
  const robotsConfiguration = useStoreState((state) => state.robotsConfiguration);

  return (
    <>
      <div className={styles.robots}>
        {robotsConfiguration.map((robotConf, index) => {
          return <Robot key={index} robotConf={robotConf} />;
        })}
      </div>
    </>
  );
}
