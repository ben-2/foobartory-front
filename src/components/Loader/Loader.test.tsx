import { Loader } from './Loader';
import { shallow, mount } from 'enzyme';
import { createStore, StoreProvider } from 'easy-peasy';
import LangProvider from '../../providers/LangProvider';
import { store } from '../../store';
import { render, fireEvent } from '@testing-library/react';

describe('<Loader />', () => {
  it('match snapshot', () => {
    const initialStateForTest = { lang: 'fr' };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Loader />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  })
});
