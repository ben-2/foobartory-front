import { createStore, StoreProvider } from 'easy-peasy';
import { DisplayActivities } from './DisplayActivities';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';
import LangProvider from '../../providers/LangProvider';

describe('<DisplayActivities />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      lang: 'fr',
      countBar: 0
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
