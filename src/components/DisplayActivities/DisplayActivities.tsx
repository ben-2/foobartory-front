import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useStoreState, useStoreActions } from '../../hooks';
import { FormattedMessage } from 'react-intl';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import AdbIcon from '@material-ui/icons/Adb';
import styles from './DisplayActivities.module.css';
import Loader from '../Loader';

export function DisplayActivities(props: any) {
  const [timerFollowingAction, setTimerFollowingAction] = useState(1000);
  const countFooBar = useStoreState((state) => state.countFooBar);
  const countFoo = useStoreState((state) => state.countFoo);
  const countBar = useStoreState((state) => state.countBar);
  const isRobotAvailable = useStoreState((state) => state.robotsConfiguration.filter((robot) => robot.id === props.robotConf.id)[0].isRobotAvailable);
  const setIsRobotAvailable = useStoreActions((actions) => actions.setIsRobotAvailable);
  const setRobotActivity = useStoreActions((actions) => actions.setRobotActivity);
  const incrementFooCounter = useStoreActions((actions) => actions.incrementFooCounter);
  const mineFoo = () => {
    setIsRobotAvailable({ id: props.robotConf.id, value: false });
    setRobotActivity({ id: props.robotConf.id, value: 'foo' });
    setTimerFollowingAction(100);
  }

  const isTimeElapsed = () => {
    incrementFooCounter(countFoo);
    setIsRobotAvailable({ id: props.robotConf.id, value: true });
  }
  return (
    <>
      {isRobotAvailable ?
        <>
          <div className={styles.fooAndBarButtonsWrapper}>
            <div className={styles.fooButtonWrapper}>
              <Button
                startIcon={<BookmarkBorderOutlinedIcon />}
                size="small"
                variant="contained"
                color="primary"
                onClick={() => mineFoo()}
              >
                <FormattedMessage id="mine" /> Foo
              </Button>
            </div>
            <div className={styles.barButtonWrapper}>
              <Button
                startIcon={<BookmarkOutlinedIcon />}
                size="small"
                variant="contained"
                color="primary"
              >
                <FormattedMessage id="mine" /> Bar
              </Button>
            </div>
          </div>
          <div className={styles.fooBarButtonWrapper}>
            <Button
              startIcon={<BookmarksOutlinedIcon />}
              disabled={!(countFoo >= 1 && countBar >= 1)}
              size="small"
              variant="contained"
              color="primary"
            >
              <FormattedMessage id="assemble" /> FooBar
            </Button>
          </div>
          <div className={styles.buyRobotButtonWrapper}>
            <Button
              startIcon={<AdbIcon />}
              disabled={!(countFooBar >= 3 && countFoo >= 6)}
              size="small"
              variant="contained"
              color="primary"
            >
              <FormattedMessage id="buyRobot" />
            </Button>
          </div>
        </>
        :
        <div className={styles.loaderWrapper}>
          <Loader timer={timerFollowingAction} isTimeElapsed={isTimeElapsed} />
        </div>
      }
    </>
  );
}
