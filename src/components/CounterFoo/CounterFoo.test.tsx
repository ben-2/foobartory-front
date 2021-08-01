import { createStore, StoreProvider } from 'easy-peasy';
import { CounterFoo } from './CounterFoo';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<CounterFoo />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      countFoo: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFoo />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });
});
