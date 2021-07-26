import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { store } from './app/store';
import App from './App';
import AppTitle from './components/AppTitle';

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

  })
});