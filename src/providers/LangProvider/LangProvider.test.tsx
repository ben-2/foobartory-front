import { LangProvider } from './LangProvider';
import { shallow } from 'enzyme';

describe('<LangProvider />', () => {
  it('renders lang select list', () => {
    const wrapper = shallow(<LangProvider />)
    expect(wrapper).toMatchSnapshot();
  })
});
