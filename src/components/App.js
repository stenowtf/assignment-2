import React from 'react';

import Contact from './Contact';
import Footer from './Footer';
import Header from './header/Header';
import OneTwoThree from './OneTwoThree';
import Pricing from './Pricing';
import Slider from './Slider';

import '../styles/App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <OneTwoThree />
      <Slider />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
