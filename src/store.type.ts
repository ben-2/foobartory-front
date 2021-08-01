export interface IRobotAttributes {
  id: number;
  currentActivity: 'foo' | 'bar' | 'foobar' | '' | 'robot';
  isRobotAvailable: boolean;
  previousActivity: 'foo' | 'bar' | 'foobar' | '' | 'robot';
}