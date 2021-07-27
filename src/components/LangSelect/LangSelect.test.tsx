import { LangSelect } from './LangSelect';
import { shallow } from 'enzyme';

describe('<LangSelect />', () => {
  it('renders lang select list', () => {
    const wrapper = shallow(<LangSelect />)
    expect(wrapper).toMatchSnapshot();
  })
});
