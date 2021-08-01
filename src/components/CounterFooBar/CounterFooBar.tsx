import { useStoreState } from '../../hooks';

export function CounterFooBar() {
  const countFooBar = useStoreState((state) => state.countFooBar);

  return (
    <>
      {countFooBar}
    </>
  );
}
