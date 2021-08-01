import { createStore, StoreProvider } from 'easy-peasy';
import { CounterBar } from './CounterBar';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<CounterBar />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      countBar: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterBar />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });

  it('counter to display 12', () => {
    const initialStateForTest = {
      countBar: 12
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterBar />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('12');
  });

  it('counter to display 394', () => {
    const initialStateForTest = {
      countBar: 394
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterBar />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('394');
  });
});
