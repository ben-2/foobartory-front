import { Robots } from './Robots';
import { shallow } from 'enzyme';

describe('<Robots />', () => {
  it('renders an emtpy Paper Card when the game starts', () => {
    const wrapper = shallow(<Robots />)
    expect(wrapper).toMatchSnapshot();
  })
});
