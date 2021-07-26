import { AppTitle } from './AppTitle';
import { shallow } from 'enzyme';

describe('<AppTitle />', () => {
  it('renders Foobartory title', () => {
    const wrapper = shallow(<AppTitle />)
    expect(wrapper).toMatchSnapshot();
  })
});
