import { Counters } from './Counters';
import { createStore, StoreProvider } from 'easy-peasy';
import { mount } from 'enzyme';
import { store } from '../../store';
import CounterFoo from '../CounterFoo';
import CounterBar from '../CounterBar';
import CounterFooBar from '../CounterFooBar';
import { useIntl } from 'react-intl';
import LangProvider from '../../providers/LangProvider';

describe('<Counters />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Counters />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Counter of Foo', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Counters />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(CounterFoo).length).toEqual(1);
  });

  it('renders a Counter of Bar', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Counters />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(CounterBar).length).toEqual(1);
  });

  it('renders a Counter of FooBar', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Counters />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(CounterFooBar).length).toEqual(1);
  });
});
