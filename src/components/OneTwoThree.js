import React from 'react';
import $ from 'jquery';

import store from '../store.js';
import { action } from '../action.js';
import utils from '../utils.js';

// images
import oneImage from '../images/one.png';
import twoImage from '../images/two.png';
import threeImage from '../images/three.png';

import '../styles/oneTwoThree.css';

const update = () => {
  const oneTwoThrees = store.getState();
  const last = [...oneTwoThrees].pop();

  utils.fakeAJAXCall(last)
    .then((result) => {
      $('.oneTwoThree > .content').html(JSON.stringify(result.item));
    });
};

const onClickOne = () => {
  store.dispatch(action('one'));
};

const onClickTwo = () => {
  store.dispatch(action('two'));
};

const onClickThree = () => {
  store.dispatch(action('three'));
};

store.subscribe(update);

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
