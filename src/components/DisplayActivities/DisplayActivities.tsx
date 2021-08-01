import Button from '@material-ui/core/Button';
import { useStoreState } from '../../hooks';
import { FormattedMessage } from 'react-intl';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import AdbIcon from '@material-ui/icons/Adb';
import styles from './DisplayActivities.module.css';

export function DisplayActivities() {
  const countFooBar = useStoreState((state) => state.countFooBar);
  const countFoo = useStoreState((state) => state.countFoo);
  const countBar = useStoreState((state) => state.countBar);
  return (
    <>
      <div className={styles.fooAndBarButtonsWrapper}>
        <div className={styles.fooButtonWrapper}>
          <Button
            startIcon={<BookmarkBorderOutlinedIcon />}
            size="small"
            variant="contained"
            color="primary"
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
  );
}
