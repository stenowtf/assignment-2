import React from 'react';

import utils from '../utils.js';

// images
import oneImage from '../images/one.png';
import twoImage from '../images/two.png';
import threeImage from '../images/three.png';

// data
import oneData from '../data/one.json';
import twoData from '../data/two.json';
import threeData from '../data/three.json';

const OneTwoThree = () => {

  // utils.fakeAJAXCall(oneData)
  //   .then((result) => {
  //     console.log(result);
  //   });

  return (
    <div className="OneTwoThree">
      <img src={oneImage} alt="" />
      <img src={twoImage} alt="" />
      <img src={threeImage} alt="" />
    </div>
  );
};

export default OneTwoThree;
