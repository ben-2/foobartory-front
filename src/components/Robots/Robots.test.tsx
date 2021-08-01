import Robot from '../Robot';
import { createStore, StoreProvider } from 'easy-peasy';
import { Robots } from './Robots';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';

describe('<Robots />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
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
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <Robots />
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });

  it('should generate as many robots as there is in robots configuration array - 3', () => {
    const initialStateForTest = {
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        }
      ]
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <Robots />
      </StoreProvider>)
    expect(wrapper.find(Robot).length).toEqual(3);
  })

  it('should generate as many robots as there is in robots configuration array - 20', () => {
    const initialStateForTest = {
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
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
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        },
        {
          id: 3,
          currentActivity: '',
          isRobotAvailable: true,
          previousActivity: '',
        }
      ]
    };
    const storeTest = createStore(store, { initialState: initialStateForTest });
    const wrapper = mount(
      <StoreProvider store={storeTest}>
        <Robots />
      </StoreProvider>)
    expect(wrapper.find(Robot).length).toEqual(20);
  })
});
