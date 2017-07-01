import React from 'react';
import { Button } from 'semantic-ui-react';
import { Glyphicon } from 'react-bootstrap';

import '../styles/pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h1>Simple pricing</h1>
      <h2>It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind.</h2>

      <div className="plansContainer">
        <div className="plan">
          <div className="titleContainer">
            <h3>BASIC</h3>
            <h6>For a taste our product</h6>
          </div>
          <div className="priceContainer">
            <p className="price">$0</p>
            <p className="subPrice">always free</p>
            <p className="description">How to boost the design and developing process with help of four paws.</p>
          </div>
          <div>
            <ul>
              <li><Glyphicon glyph="ok" /> 2 Gb of space</li>
              <li><Glyphicon glyph="ok" /> 30 days of file recovery</li>
              <li><Glyphicon glyph="ok" /> MS Office 365 integration</li>
              <li className="notSelected">Unlimited third-party integrations</li>
              <li className="notSelected">Remote wipe</li>
            </ul>
          </div>
          <Button fluid basic color='blue'>Get Started</Button>
        </div>

        <div className="plan">
          <div className="titleContainer">
            <h3>PROFESSIONAL</h3>
            <h6>Make individual product</h6>
          </div>
          <div className="priceContainer">
            <p className="price">$8.99</p>
            <p className="subPrice">per month</p>
            <p className="description">Computer War Games How To Estimate Decisions Made By C C Traine.</p>
          </div>
          <div>
            <ul>
              <li><Glyphicon glyph="ok" /> 8 Gb of space</li>
              <li><Glyphicon glyph="ok" /> 60 days of file recovery</li>
              <li><Glyphicon glyph="ok" /> MS Office 365 integration</li>
              <li><Glyphicon glyph="ok" /> Unlimited third-party integrations</li>
              <li className="notSelected">Remote wipe</li>
            </ul>
          </div>
          <Button fluid basic color='blue'>Get Started</Button>
        </div>

        <div className="plan selected">
          <div className="titleContainer">
            <h3>BUSINESS</h3>
            <h6>For big companies</h6>
          </div>
          <div className="priceContainer">
            <p className="price">$18.99</p>
            <p className="subPrice">per month</p>
            <p className="description">Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing.</p>
          </div>
          <div>
            <ul>
              <li><Glyphicon glyph="ok" /> 30 Gb of space</li>
              <li><Glyphicon glyph="ok" /> 90 days of file recovery</li>
              <li><Glyphicon glyph="ok" /> MS Office 365 integration</li>
              <li><Glyphicon glyph="ok" /> Unlimited third-party integrations</li>
              <li><Glyphicon glyph="ok" /> Remote wipe</li>
            </ul>
          </div>
          <Button fluid color='green'>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
