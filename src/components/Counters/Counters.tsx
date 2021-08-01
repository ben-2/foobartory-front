import CounterFoo from '../CounterFoo';
import CounterBar from '../CounterBar';
import CounterFooBar from '../CounterFooBar';

export function Counters() {
  return (
    <>
      <div>Foo Counter :<CounterFoo /></div>
      <div>Bar Counter :<CounterBar /></div>
      <div>FooBar Counter :<CounterFooBar /></div>
    </>
  );
}
