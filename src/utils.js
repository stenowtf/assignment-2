import oneData from './data/one.json';
import twoData from './data/two.json';
import threeData from './data/three.json';

const randomInterval = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default {
  fakeAJAXCall: (name) => {
    if (name === 'one') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(oneData);
        }, randomInterval(500, 2500));
      });
    } else if (name === 'two') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(twoData);
        }, randomInterval(500, 2500));
      });
    } else if (name === 'three') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(threeData);
        }, randomInterval(500, 2500));
      });
    }
  },
};
