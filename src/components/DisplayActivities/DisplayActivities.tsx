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
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';

export function DisplayActivities(props: any) {
  const intl = useIntl();
  const [timerFollowingAction, setTimerFollowingAction] = useState({ action: '', value: 1000 });
  const countFooBar = useStoreState((state) => state.countFooBar);
  const countFoo = useStoreState((state) => state.countFoo);
  const countBar = useStoreState((state) => state.countBar);
  const isRobotAvailable = useStoreState((state) => state.robotsConfiguration.filter((robot) => robot.id === props.robotConf.id)[0].isRobotAvailable);
  const numberOfRobots = useStoreState((state) => state.robotsConfiguration.length);
  const currentActivity = useStoreState((state) => state.robotsConfiguration.filter((robot) => robot.id === props.robotConf.id)[0].currentActivity);
  const setIsRobotAvailable = useStoreActions((actions) => actions.setIsRobotAvailable);
  const setRobotActivity = useStoreActions((actions) => actions.setRobotActivity);
  const incrementFooCounter = useStoreActions((actions) => actions.incrementFooCounter);
  const incrementBarCounter = useStoreActions((actions) => actions.incrementBarCounter);
  const decrementFooCounter = useStoreActions((actions) => actions.decrementFooCounter);
  const decrementBarCounter = useStoreActions((actions) => actions.decrementBarCounter);
  const incrementFooBarCounter = useStoreActions((actions) => actions.incrementFooBarCounter);
  const addRobot = useStoreActions((actions) => actions.addRobot);
  const decrementBuyRobot = useStoreActions((actions) => actions.decrementBuyRobot);
  const endGame = useStoreActions((actions) => actions.endGame);

  const mineFoo = () => {
    setIsRobotAvailable({ id: props.robotConf.id, value: false });
    setRobotActivity({ id: props.robotConf.id, value: 'foo' });
    let timer = 100;
    if ('foo' !== currentActivity) {
      timer = 600;
      toast.info(intl.formatMessage({ id: 'activityChange' }));
    }
    setTimerFollowingAction({ action: 'foo', value: timer });
  }

  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const mineBar = () => {
    setIsRobotAvailable({ id: props.robotConf.id, value: false });
    setRobotActivity({ id: props.robotConf.id, value: 'bar' });
    const timerBar = randomInt(50, 200);
    let timer = timerBar;
    if ('bar' !== currentActivity) {
      timer = 500 + timerBar;
      toast.info(intl.formatMessage({ id: 'activityChange' }));
    }
    setTimerFollowingAction({ action: 'bar', value: timer });
  }

  const mineFooBar = () => {
    setIsRobotAvailable({ id: props.robotConf.id, value: false });
    setRobotActivity({ id: props.robotConf.id, value: 'foobar' });
    const successChance = randomInt(0, 100);
    let isSuccess = false;
    if (successChance <= 60) {
      isSuccess = true;
    }
    console.log('isSuccess : ', isSuccess);
    if (isSuccess) {
      decrementFooCounter(countFoo);
      decrementBarCounter(countBar);
      incrementFooBarCounter(countFooBar);
      toast.success(`FooBar ${intl.formatMessage({ id: 'assembled' })}`);
    } else {
      decrementFooCounter(countFoo);
      toast.error(`FooBar ${intl.formatMessage({ id: 'notAssembled' })}`);
    }

    let timer = 200;
    if ('foobar' !== currentActivity) {
      timer = 700;
      toast.info(intl.formatMessage({ id: 'activityChange' }));
    }
    setTimerFollowingAction({ action: 'foobar', value: timer });
  }

  const buyRobot = () => {
    setRobotActivity({ id: props.robotConf.id, value: 'robot' });
    if (numberOfRobots === 19) {
      endGame();
    }
    addRobot();
    decrementBuyRobot({ foo: countFoo, foobar: countFooBar });
    toast.success(intl.formatMessage({ id: 'boughtRobot' }));
  }

  const isTimeElapsed = (action: any) => {
    if (action === 'foo') {
      incrementFooCounter(countFoo);
    } else if (action === 'bar') {
      incrementBarCounter(countBar);
    }
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
                onClick={() => mineBar()}
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
              onClick={() => mineFooBar()}
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
              onClick={() => buyRobot()}
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
