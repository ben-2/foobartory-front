import { LangProvider } from './LangProvider';
import { shallow } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<LangProvider />', () => {
  it('renders lang select list', () => {
    const wrapper = shallow(<LangProvider />)
    expect(wrapper).toMatchSnapshot();
  })
});
