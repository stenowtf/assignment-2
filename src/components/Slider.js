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
    <section className="slider">
      <Carousel showArrows showStatus={false} showThumbs={false} useKeyboardArrows dynamicHeight={false} emulateTouch>
        <div>
          <img className="slideImage leftAligned" src={slide1} alt="" />
          <div className="slideContent">
            <h2>Powerful Extensions</h2>
            <p>This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature.</p>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <img className="slideImage" src={slide2} alt="" />
          <div className="slideContent">
            <h2>Modern, User Friendly & Powerful Interface</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <img className="slideImage" src={slide3} alt="" />
          <div className="slideContent">
            <h2>Elegant & Perfect Design</h2>
            <p>Te sea deleniti suscipiantur deterruisset, eu quis detracto sapientem mea. An purto dicunt deserunt vix, eam te iudico tritani. Dicunt irure.</p>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <img className="slideImage" src={slide4} alt="" />
          <div className="slideContent">
            <h2>Clean & Powerful Theme</h2>
            <p>Te sea deleniti suscipiantur deterruisset, eu quis detracto sapientem mea. An purto dicunt deserunt vix, eam te iudico tritani. Dicunt irure.</p>
            <a>Learn more</a>
          </div>
        </div>
        <div>
          <img className="slideImage" src={slide5} alt="" />
          <div className="slideContent">
            <h2>Modern, User Friendly & Powerful Interface</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a>Learn more</a>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
