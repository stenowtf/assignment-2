import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import OneTwoThree from './components/oneTwoThree';
import Pricing from './components/pricing';
import Slider from './components/slider';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'semantic-ui-css/semantic.min.css';

import './styles/index.css';

ReactDOM.render(
  <div className="container">
    <Header />
    <OneTwoThree />
    <Slider />
    <Pricing />
    <Contact />
    <Footer />
  </div>,
  document.getElementById('root')
);
