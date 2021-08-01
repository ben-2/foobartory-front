import styles from './Robot.module.css';
import { Card } from '@material-ui/core';
import DisplayActivities from '../DisplayActivities';
import AdbIcon from '@material-ui/icons/Adb';
import Loader from '../Loader';

export function Robot(props: any) {
  const isTimeElapsed = () => {
    console.log('TIME ELAPSED');
  }
  return (
    <>
      <Card className={styles.robot}>
        <div className={styles.robotIcon}><div className={styles.innerIcon}><AdbIcon /></div><div className={styles.innerIndex}>#{props && props.robotConf && props.robotConf.id}</div></div>
        <div className={styles.displayActivitiesSection}><DisplayActivities /></div>
      </Card>
      <Loader timer={500} isTimeElapsed={isTimeElapsed} />
    </>
  );
}
