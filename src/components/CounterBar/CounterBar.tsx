import { useStoreState } from '../../hooks';

export function CounterBar() {
  const countBar = useStoreState((state) => state.countBar);

  return (
    <>
      {countBar}
    </>
  );
}
