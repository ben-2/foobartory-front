import { createTypedHooks } from 'easy-peasy';
import { IStoreModel } from './store';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<IStoreModel>();

export {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
};