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

import '../styles/oneTwoThree.css';

const onClickOne = () => {
  utils.fakeAJAXCall(oneData)
    .then((result) => {
      console.log(result.item);
    });
};

const onClickTwo = () => {
  utils.fakeAJAXCall(twoData)
    .then((result) => {
      console.log(result.item);
    });
};

const onClickThree = () => {
  utils.fakeAJAXCall(threeData)
    .then((result) => {
      console.log(result.item);
    });
};

const OneTwoThree = () => {
  return (
    <section className="oneTwoThree">
      <div className="headers">
        <h1>The Best Way to Work Together</h1>
        <h2>We design and develop software for shools.</h2>
      </div>

      <div className="content">
        {/*lodead from JSON*/}
      </div>

      <div className="actionsSection">
        <div className="action" onClick={onClickOne}>
          <img src={oneImage} alt="" />
          <div>
            <p>One</p>
            <p>Button for show dynamic data</p>
          </div>
        </div>
        <div className="action" onClick={onClickTwo}>
          <img src={twoImage} alt="" />
          <div>
            <p>Two</p>
            <p>Button for show dynamic data</p>
          </div>
        </div>
        <div className="action" onClick={onClickThree}>
          <img src={threeImage} alt="" />
          <div>
            <p>Three</p>
            <p>Button for show dynamic data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneTwoThree;
