import { StartButton } from './StartButton';
import { shallow, mount } from 'enzyme';
import { createStore, StoreProvider } from 'easy-peasy';
import LangProvider from '../../providers/LangProvider';
import { store } from '../../store';
import { render, fireEvent } from '@testing-library/react';

describe('<StartButton />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <StartButton />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  })

  it('starts game on click', () => {
    const initialStateForTest = { lang: 'fr', startGame: jest.fn() };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    store.getActions().startGame();

    expect(store.getState().isGameStarted).toEqual(true);
  })
});
