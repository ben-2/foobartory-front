import { LangSelect } from './LangSelect';
import { createStore, StoreProvider } from 'easy-peasy';
import { mount } from 'enzyme';
import { store } from '../../store';
import LangProvider from '../../providers/LangProvider';
import { render } from '@testing-library/react';

describe('<LangSelect />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <LangSelect />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  })

  it('renders lang in french if lang selector is fr in store', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const app = (
      <StoreProvider store={storeTest}>
        <LangProvider>
          <LangSelect />
        </LangProvider>
      </StoreProvider>);
    const { getByTestId } = render(app);
    expect(getByTestId('lang').textContent).toEqual('Français');
  })

  it('renders lang in english if lang selector is en in store', () => {
    const initialStateForTest = { lang: 'en' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const app = (
      <StoreProvider store={storeTest}>
        <LangProvider>
          <LangSelect />
        </LangProvider>
      </StoreProvider>);
    const { getByTestId } = render(app);
    expect(getByTestId('lang').textContent).toEqual('English');
  })
});
