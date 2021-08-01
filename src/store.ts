import { createStore, Action, action, Thunk, thunk } from 'easy-peasy';
import { IRobotAttributes } from './store.type';
export interface IStoreModel {
  lang: string;
  setLang: Action<IStoreModel, string>;
  isGameStarted: boolean;
  startGame: Action<IStoreModel>;
  robotsConfiguration: IRobotAttributes[];
  countFoo: number;
  countBar: number;
  countFooBar: number;
  setIsRobotAvailable: Thunk<IStoreModel, { id: number, value: boolean }>;
  updateRobotConfiguration: Action<IStoreModel, IRobotAttributes[]>;
  setRobotActivity: Thunk<IStoreModel, { id: number, value: 'foo' | 'bar' | 'foobar' | 'robot' | '' }>;
  incrementFooCounter: Action<IStoreModel, number>;
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
};


export const store = createStore<IStoreModel>(model);
