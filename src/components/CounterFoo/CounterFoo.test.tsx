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

  it('counter to display 4', () => {
    const initialStateForTest = {
      countFoo: 4
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFoo />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('4');
  });

  it('counter to display 253', () => {
    const initialStateForTest = {
      countFoo: 253
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <CounterFoo />
      </StoreProvider>)
    expect(wrapper.text()).toEqual('253');
  });
});
