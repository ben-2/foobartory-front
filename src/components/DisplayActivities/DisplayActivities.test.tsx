import { createStore, StoreProvider } from 'easy-peasy';
import { DisplayActivities } from './DisplayActivities';
import { store } from '../../store';
import { mount, shallow } from 'enzyme';
import { useStoreState } from '../../hooks';
import LangProvider from '../../providers/LangProvider';
import Button from '@material-ui/core/Button';

describe('<DisplayActivities />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      lang: 'fr',
      countFoo: 0,
      countBar: 0,
      countFooBar: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <DisplayActivities />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });
});
