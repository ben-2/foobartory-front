import { GameBoard } from './GameBoard';
import { shallow } from 'enzyme';
import Robots from '../Robots';

describe('<GameBoard />', () => {
  it('renders a game board when the game starts', () => {
    const wrapper = shallow(<GameBoard />)
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Robots', () => {
    const wrapper = shallow(<GameBoard />)
    expect(wrapper.find(Robots).length).toEqual(1);
  });
});
