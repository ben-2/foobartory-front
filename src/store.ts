import { createStore, Action, action } from 'easy-peasy';

export interface IStoreModel {
  lang: string;
  setLang: Action<IStoreModel, string>;
  isGameStarted: boolean;
  startGame: Action<IStoreModel>;
}

const model: IStoreModel = {
  lang: 'fr',
  setLang: action((state, payload) => {
    state.lang = payload;
  }),
  isGameStarted: false,
  startGame: action((state, payload) => {
    state.isGameStarted = true;
  }),
};


export const store = createStore<IStoreModel>(model);
