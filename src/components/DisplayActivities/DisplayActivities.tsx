import Button from '@material-ui/core/Button';
import { useStoreState } from '../../hooks';
import { FormattedMessage } from 'react-intl';

export function DisplayActivities() {
  const countFooBar = useStoreState((state) => state.countFooBar);
  const countFoo = useStoreState((state) => state.countFoo);
  return (
    <>
      <Button size="small" variant="contained" color="primary">
        <FormattedMessage id="mine" /> Foo
      </Button>
      <Button size="small" variant="contained" color="primary">
        <FormattedMessage id="mine" /> Bar
      </Button>
      <Button size="small" variant="contained" color="primary">
        <FormattedMessage id="assemble" /> FooBar
      </Button>
      <Button disabled={!(countFooBar >= 3 && countFoo >= 6)} size="small" variant="contained" color="primary">
        <FormattedMessage id="buyRobot" />
      </Button>
    </>
  );
}
