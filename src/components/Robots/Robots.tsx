import styles from './Robots.module.css';
import { Card } from '@material-ui/core';
import Robot from '../Robot';

export function Robots() {
  return (
    <>
      {['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'].map((i, index) => {
        return <Robot key={index} />;
      })}
    </>
  );
}
