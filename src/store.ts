import { createStore, Action, action, Thunk, thunk } from 'easy-peasy';
import { IRobotAttributes } from './store.type';
export interface IStoreModel {
  lang: string;
  setLang: Action<IStoreModel, string>;
  isGameStarted: boolean;
  isGameEnded: boolean;
  startGame: Action<IStoreModel>;
  endGame: Action<IStoreModel>;
  robotsConfiguration: IRobotAttributes[];
  countFoo: number;
  countBar: number;
  countFooBar: number;
  setIsRobotAvailable: Thunk<IStoreModel, { id: number, value: boolean }>;
  updateRobotConfiguration: Action<IStoreModel, IRobotAttributes[]>;
  setRobotActivity: Thunk<IStoreModel, { id: number, value: 'foo' | 'bar' | 'foobar' | 'robot' | '' }>;
  incrementFooCounter: Action<IStoreModel, number>;
  incrementBarCounter: Action<IStoreModel, number>;
  incrementFooBarCounter: Action<IStoreModel, number>;
  decrementFooCounter: Action<IStoreModel, number>;
  decrementBuyRobot: Action<IStoreModel, { foo: number, foobar: number }>;
  decrementBarCounter: Action<IStoreModel, number>;
  addRobot: Thunk<IStoreModel>;
}

const model: IStoreModel = {
  lang: 'fr',
  setLang: action((state, payload) => {
    state.lang = payload;
  }),
  isGameStarted: false,
  isGameEnded: false,
  startGame: action((state) => {
    state.isGameStarted = true;
  }),
  endGame: action((state) => {
    state.isGameEnded = true;
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
  ],
  countFoo: 0,
  countBar: 0,
  countFooBar: 0,
  setIsRobotAvailable: thunk((actions, payload, { getState }) => {
    const storeState = getState();
    const currentRobotConf = storeState.robotsConfiguration.map((robot) => {
      const currentRobot = robot;
      if (robot.id === payload.id) {
        currentRobot.isRobotAvailable = payload.value;
      }
      return currentRobot;
    });
    actions.updateRobotConfiguration(currentRobotConf);
  }),
  updateRobotConfiguration: action((state, payload) => {
    state.robotsConfiguration = payload;
  }),
  setRobotActivity: thunk((actions, payload, { getState }) => {
    const storeState = getState();
    const currentRobotConf = storeState.robotsConfiguration.map((robot) => {
      const currentRobot = robot;
      if (robot.id === payload.id) {
        currentRobot.previousActivity = robot.currentActivity;
        currentRobot.currentActivity = payload.value;
      }
      return currentRobot;
    });
    actions.updateRobotConfiguration(currentRobotConf);
  }),
  incrementFooCounter: action((state, payload) => {
    state.countFoo = payload + 1;
  }),
  incrementBarCounter: action((state, payload) => {
    state.countBar = payload + 1;
  }),
  incrementFooBarCounter: action((state, payload) => {
    state.countFooBar = payload + 1;
  }),
  decrementFooCounter: action((state, payload) => {
    state.countFoo = payload - 1;
  }),
  decrementBarCounter: action((state, payload) => {
    state.countBar = payload - 1;
  }),
  decrementBuyRobot: action((state, payload) => {
    state.countFoo = payload.foo - 6;
    state.countFooBar = payload.foobar - 3;
  }),
  addRobot: thunk((actions, payload, { getState }) => {
    const storeState = getState();
    const currentRobotConfLength = storeState.robotsConfiguration.length;
    const newConf = storeState.robotsConfiguration;
    newConf.push({ id: currentRobotConfLength + 1, currentActivity: '', isRobotAvailable: true, previousActivity: '' });

    actions.updateRobotConfiguration(newConf);
  }),
};


export const store = createStore<IStoreModel>(model);
