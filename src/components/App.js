import React from 'react';

import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import OneTwoThree from './OneTwoThree';
import Pricing from './Pricing';
import Slider from './Slider';

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
