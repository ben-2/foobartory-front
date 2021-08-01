export interface IRobotAttributes {
  id: number;
  currentActivity: string;
  isRobotAvailable: boolean;
  previousActivity: 'foo' | 'bar' | 'foobar' | '';
}