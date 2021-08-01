import { Robot } from './Robot';
import { shallow } from 'enzyme';

describe('<Robot />', () => {
  it('renders an emtpy Paper Card when the game starts', () => {
    const wrapper = shallow(<Robot />)
    expect(wrapper).toMatchSnapshot();
  })
});
