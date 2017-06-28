import React from 'react';

import one from '../data/one.json';
import two from '../data/two.json';
import three from '../data/three.json';

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const fakeAJAXCall = (json) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, random(500, 2500));
  });
};

const OneTwoThree = () => {

  fakeAJAXCall(one).then((result) => {
    console.log(result);
  });

  fakeAJAXCall(two).then((result) => {
    console.log(result);
  });

  fakeAJAXCall(three).then((result) => {
    console.log(result);
  });

  return (
    <div className="OneTwoThree">
    </div>
  );
};

export default OneTwoThree;
