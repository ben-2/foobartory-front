import { GameBoard } from './GameBoard';
import { shallow } from 'enzyme';

describe('<GameBoard />', () => {
  it('renders a game board when the game starts', () => {
    const wrapper = shallow(<GameBoard />)
    expect(wrapper).toMatchSnapshot();
  })
});
