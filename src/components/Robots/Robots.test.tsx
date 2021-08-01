import Robot from '../Robot';
import { Robots } from './Robots';
import { shallow } from 'enzyme';

describe('<Robots />', () => {
  it('renders an emtpy Paper Card when the game starts', () => {
    const wrapper = shallow(<Robots />)
    expect(wrapper).toMatchSnapshot();
  })

  it('renders 20 Robot', () => {
    const wrapper = shallow(<Robots />)
    expect(wrapper.find(Robot).length).toEqual(20);
  })
});
