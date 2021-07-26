import { AppSubTitle } from './AppSubTitle';
import { shallow } from 'enzyme';

describe('<AppTitle />', () => {
  it('renders Chaine de production automatisee subtitle', () => {
    const wrapper = shallow(<AppSubTitle />)
    expect(wrapper).toMatchSnapshot();
  })
});
