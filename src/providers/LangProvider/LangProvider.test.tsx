import { LangProvider } from './LangProvider';
import { createStore, StoreProvider } from 'easy-peasy';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<LangProvider />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  })
});
