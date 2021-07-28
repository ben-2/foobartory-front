import { createStore, Action, action } from 'easy-peasy';

export interface IStoreModel {
  lang: string;
  setLang: Action<IStoreModel, string>;
}

const model: IStoreModel = {
  lang: 'fr',
  setLang: action((state, payload) => {
    state.lang = payload;
  }),
};


export const store = createStore<IStoreModel>(model);
