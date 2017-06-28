import React from 'react';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Slider from './components/Slider';
import OneTwoThree from './components/OneTwoThree';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div>
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
