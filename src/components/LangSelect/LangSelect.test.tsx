import { LangSelect } from './LangSelect';
import { createStore, StoreProvider } from 'easy-peasy';
import { mount } from 'enzyme';
import { store } from '../../store';
import LangProvider from '../../providers/LangProvider';

describe('<LangSelect />', () => {
  it('renders lang select list', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <LangSelect />
        </LangProvider>
      </StoreProvider>)
    //expect(wrapper).toMatchSnapshot();
  })
});
