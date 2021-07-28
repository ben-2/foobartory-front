import { shallow, mount } from 'enzyme';
import { createStore, StoreProvider } from 'easy-peasy';
import { store } from './store';
import App from './App';
import AppTitle from './components/AppTitle';
import AppSubTitle from './components/AppSubTitle';
import LangSelect from './components/LangSelect';
import StartButton from './components/StartButton';
import GameBoard from './components/GameBoard';
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
    expect(wrapper).toMatchSnapshot();
  })
  it('displays one Title, one subtitle and a language selector', () => {
    const initialStateForTest = { lang: 'fr', setLang: jest.fn() };
    const storeTest = createStore(store, { initialState: initialStateForTest });

    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <App />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(AppTitle).length).toEqual(1);
    expect(wrapper.find(AppSubTitle).length).toEqual(1);
    expect(wrapper.find(LangSelect).length).toEqual(1);
  })

  it('displays one StartButton if the game has not started yet', () => {
    const initialStateForTest = { lang: 'fr', setLang: jest.fn(), isGameStarted: false };
    const storeTest = createStore(store, { initialState: initialStateForTest });

    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <App />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(StartButton).length).toEqual(1);
    expect(wrapper.find(GameBoard).length).toEqual(0);
  })

  it('displays one GameBoard when the game starts', () => {
    const initialStateForTest = { lang: 'fr', setLang: jest.fn(), isGameStarted: true };
    const storeTest = createStore(store, { initialState: initialStateForTest });

    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <App />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(StartButton).length).toEqual(0);
    expect(wrapper.find(GameBoard).length).toEqual(1);
  })
});