import styles from './Robot.module.css';
import { Card } from '@material-ui/core';
import DisplayActivities from '../DisplayActivities';

export function Robot() {
  return (
    <>
      <Card className={styles.robot}>
        <DisplayActivities />
      </Card>
    </>
  );
}
