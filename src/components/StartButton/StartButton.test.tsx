import { StartButton } from './StartButton';
import { shallow } from 'enzyme';

describe('<StartButton />', () => {
  it('renders a start button on game start', () => {
    const wrapper = shallow(<StartButton />)
    expect(wrapper).toMatchSnapshot();
  })
});
