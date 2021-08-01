import { Robot } from './Robot';
import { mount } from 'enzyme';
import { store } from '../../store';
import { createStore, StoreProvider } from 'easy-peasy';
import LangProvider from '../../providers/LangProvider';

describe('<Robot />', () => {
  it('renders an emtpy Paper Card when the game starts', () => {
    const props: any = { key: 1, robotConf: { id: 3 } };
    const initialStateForTest = {
      lang: 'fr',
      countFoo: 0,
      countBar: 0,
      countFooBar: 0
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <LangProvider>
          <Robot props={props} />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  })
});
