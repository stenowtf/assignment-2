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
    <section className="oneTwoThree">
      <h1>The Best Way to Work Together</h1>
      <h2>We design and develop software for shools.</h2>

      <div className="content">

      </div>

      <div>
        <img src={oneImage} alt="" />
        <h3>One</h3>
        <p>Button for show dynamic data</p>
      </div>
      <div>
        <img src={twoImage} alt="" />
        <h3>Two</h3>
        <p>Button for show dynamic data</p>
      </div>
      <div>
        <img src={threeImage} alt="" />
        <h3>Three</h3>
        <p>Button for show dynamic data</p>
      </div>
    </section>
  );
};

export default OneTwoThree;
