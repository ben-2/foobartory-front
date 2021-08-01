import Robot from '../Robot';
import { createStore, StoreProvider } from 'easy-peasy';
import { Robots } from './Robots';
import { store } from '../../store';
import { mount } from 'enzyme';
import { useStoreState } from '../../hooks';
import LangProvider from '../../providers/LangProvider';

describe('<Robots />', () => {
  it('match snapshot', () => {
    const initialStateForTest = {
      lang: 'fr',
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
        <LangProvider>
          <Robots />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper).toMatchSnapshot();
  });

  it('should generate as many robots as there is in robots configuration array - 3', () => {
    const initialStateForTest = {
      lang: 'fr',
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
        <LangProvider>
          <Robots />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(Robot).length).toEqual(3);
  })

  it('should generate as many robots as there is in robots configuration array - 20', () => {
    const initialStateForTest = {
      lang: 'fr',
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
        <LangProvider>
          <Robots />
        </LangProvider>
      </StoreProvider>)
    expect(wrapper.find(Robot).length).toEqual(20);
  })
});
