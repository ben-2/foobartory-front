import { Counters } from './Counters';
import { shallow } from 'enzyme';
import CounterFoo from '../CounterFoo';
import CounterBar from '../CounterBar';
import CounterFooBar from '../CounterFooBar';

describe('<Counters />', () => {
  it('match snapshot', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Counter of Foo', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper.find(CounterFoo).length).toEqual(1);
  });

  it('renders a Counter of Bar', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper.find(CounterBar).length).toEqual(1);
  });

  it('renders a Counter of FooBar', () => {
    const wrapper = shallow(<Counters />);
    expect(wrapper.find(CounterFooBar).length).toEqual(1);
  });
});
