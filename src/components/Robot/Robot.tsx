import styles from './Robot.module.css';
import { Card } from '@material-ui/core';
import DisplayActivities from '../DisplayActivities';
import AdbIcon from '@material-ui/icons/Adb';

export function Robot(props: any) {
  return (
    <>
      <Card className={styles.robot}>
        <div className={styles.robotIcon}><div className={styles.innerIcon}><AdbIcon /></div><div className={styles.innerIndex}>#{props && props.robotConf && props.robotConf.id}</div></div>
        <div className={styles.displayActivitiesSection}><DisplayActivities robotConf={props.robotConf} /></div>
      </Card>
    </>
  );
}
