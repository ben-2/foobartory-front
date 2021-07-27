import { shallow, mount } from 'enzyme';
import { createStore, StoreProvider } from 'easy-peasy';
import { store } from './store';
import App from './App';
import AppTitle from './components/AppTitle';
import AppSubTitle from './components/AppSubTitle';
import LangSelect from './components/LangSelect';
import LangProvider from './providers/LangProvider';

describe('<App />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr', setLang: jest.fn() };
    const storeTest = createStore(store, { initialState: initialStateForTest });

    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <App />
        </LangProvider>
      </StoreProvider>)
    console.log(wrapper.debug())
    expect(wrapper).toMatchSnapshot();
  })
  it('display one Title', () => {
    const wrapper = shallow(
      <App />)
    expect(wrapper.find(AppTitle).length).toEqual(1);
    expect(wrapper.find(AppSubTitle).length).toEqual(1);
    expect(wrapper.find(LangSelect).length).toEqual(1);

  })
});