import { createStore, StoreProvider } from 'easy-peasy';
import { Counters } from './Counters';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<Counters />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      countFoo: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <Counters />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });
});
