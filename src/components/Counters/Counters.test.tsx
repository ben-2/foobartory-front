import { Counters } from './Counters';
import { shallow } from 'enzyme';
import CounterFoo from '../CounterFoo';

describe('<Counters />', () => {
  it('match snapshot', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Counter of Foo', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper.find(CounterFoo).length).toEqual(1);
  });
});
