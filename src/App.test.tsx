import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { store } from './app/store';
import App from './App';
import AppTitle from './components/AppTitle';
import AppSubTitle from './components/AppSubTitle';
import LangSelect from './components/LangSelect';

describe('<App />', () => {
  it('match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>)
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