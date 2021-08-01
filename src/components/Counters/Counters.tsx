import CounterFoo from '../CounterFoo';
import CounterBar from '../CounterBar';
import CounterFooBar from '../CounterFooBar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useIntl } from 'react-intl';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import styles from './Counters.module.css';

export function Counters() {
  const intl = useIntl();
  return (
    <>
      <div className={styles.fooBarWrapper}>
        <div className={styles.fooBarCounter}>
          <Card>
            <CardHeader
              className={styles.fooBarCounterHeader}
              avatar={
                <Avatar aria-label="bar">
                  <BookmarksOutlinedIcon />
                </Avatar>
              }
              title={`${intl.formatMessage({ id: 'numberOf' })} FooBar`}
            />
            <CardContent
              className={styles.fooBarCounterContent}
            >
              <CounterFooBar />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={styles.fooAndBarWrapper}>
        <div className={styles.fooCounter}>
          <Card>
            <CardHeader
              className={styles.fooCounterHeader}
              avatar={
                <Avatar aria-label="foo">
                  <BookmarkBorderOutlinedIcon />
                </Avatar>
              }
              title={`${intl.formatMessage({ id: 'numberOf' })} Foo`}
            />
            <CardContent
              className={styles.fooCounterContent}
            >
              <CounterFoo />
            </CardContent>
          </Card>
        </div>
        <div className={styles.barCounter}>
          <Card>
            <CardHeader
              className={styles.barCounterHeader}
              avatar={
                <Avatar aria-label="bar">
                  <BookmarkOutlinedIcon />
                </Avatar>
              }
              title={`${intl.formatMessage({ id: 'numberOf' })} Bar`}
            />
            <CardContent
              className={styles.barCounterContent}
            >
              <CounterBar />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
