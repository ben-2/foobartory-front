import { createStore, Action, action } from 'easy-peasy';
import { IRobotAttributes } from './store.type';
export interface IStoreModel {
  lang: string;
  setLang: Action<IStoreModel, string>;
  isGameStarted: boolean;
  startGame: Action<IStoreModel>;
  robotsConfiguration: IRobotAttributes[];
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
  robotsConfiguration: [
    {
      id: 1,
      currentActivity: '',
      isRobotAvailable: true,
      previousActivity: '',
    },
    {
      id: 2,
      currentActivity: '',
      isRobotAvailable: true,
      previousActivity: '',
    }
  ]
};


export const store = createStore<IStoreModel>(model);
