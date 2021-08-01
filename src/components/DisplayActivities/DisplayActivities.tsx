import Button from '@material-ui/core/Button';
import { useStoreState } from '../../hooks';
import { FormattedMessage } from 'react-intl';

export function DisplayActivities() {
  return (
    <>
      <Button variant="contained" color="primary">
        <FormattedMessage id="mine" /> Foo
      </Button>
    </>
  );
}
