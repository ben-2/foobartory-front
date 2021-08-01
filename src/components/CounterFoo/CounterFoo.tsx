import { useStoreState } from '../../hooks';

export function CounterFoo() {
  const countFoo = useStoreState((state) => state.countFoo);

  return (
    <>
      {countFoo}
    </>
  );
}
