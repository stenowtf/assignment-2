import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';

import '../styles/slider.css';

const Slider = () => {
  return (
    <Carousel showArrows={false} showStatus={false} showThumbs={false} useKeyboardArrows dynamicHeight emulateTouch>
      <div>
        <img className="slideImage" src={slide1} alt="" />
        <p className="slideText">
          <h1>Powerful Extensions</h1>
          <p>This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature.</p>
          <a>Learn more</a>
        </p>
      </div>
      <div>
        <img className="slideImage" src={slide2} alt="" />
        <p className="slideText">
          <h1>Modern, User Friendly & Powerful Interface</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a>Learn more</a>
        </p>
      </div>
      <div>
        <img className="slideImage" src={slide3} alt="" />
        <p className="slideText">
          <h1>Elegant & Perfect Design</h1>
          <p>Te sea deleniti suscipiantur deterruisset, eu quis detracto sapientem mea. An purto dicunt deserunt vix, eam te iudico tritani. Dicunt irure.</p>
          <a>Learn more</a>
        </p>
      </div>
      <div>
        <img className="slideImage" src={slide4} alt="" />
        <p className="slideText">
          <h1>Clean & Powerful Theme</h1>
          <p>Te sea deleniti suscipiantur deterruisset, eu quis detracto sapientem mea. An purto dicunt deserunt vix, eam te iudico tritani. Dicunt irure.</p>
          <a>Learn more</a>
        </p>
      </div>
      <div>
        <img className="slideImage" src={slide5} alt="" />
        <p className="slideText">
          <h1>Modern, User Friendly & Powerful Interface</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a>Learn more</a>
        </p>
      </div>
    </Carousel>
  );
};

export default Slider;
