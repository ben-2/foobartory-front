import { createStore, StoreProvider } from 'easy-peasy';
import { CounterFooBar } from './CounterFooBar';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<CounterFooBar />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      countFooBar: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFooBar />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });

  it('counter to display 11', () => {
    const initialStateForTest = {
      countFooBar: 11
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFooBar />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('11');
  });

  it('counter to display 55', () => {
    const initialStateForTest = {
      countFooBar: 55
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFooBar />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('55');
  });
});
