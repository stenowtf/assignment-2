import React from 'react';
import { Button } from 'semantic-ui-react';

const Pricing = () => {
  return (
    <section className="pricing">
      <h1>Simple pricing</h1>
      <p>It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind.</p>

      <div className="plan">
        <div>
          <h3>BASIC</h3>
          <p>For a taste our product</p>
        </div>
        <div>
          <p>$0 <span>always free</span></p>
          <p>How to boost the design and developing process with help of four paws.</p>
        </div>
        <div>
          <ul>
            <li>2 Gb of space</li>
            <li>30 days of file recovery</li>
            <li>MS Office 365 integration</li>
            <li className="notSelected">Unlimited third-party integrations</li>
            <li className="notSelected">Remote wipe</li>
          </ul>
        </div>
      </div>

      <div className="plan">
        <div>
          <h3>PROFESSIONAL</h3>
          <p>Make individual product</p>
        </div>
        <div>
          <p>$8.99 <span>per month</span></p>
          <p>Computer War Games How To Estimate Decisions Made By C C Traine.</p>
        </div>
        <div>
          <ul>
            <li>8 Gb of space</li>
            <li>60 days of file recovery</li>
            <li>MS Office 365 integration</li>
            <li>Unlimited third-party integrations</li>
            <li className="notSelected">Remote wipe</li>
          </ul>
        </div>
      </div>

      <div className="plan">
        <div>
          <h3>BUSINESS</h3>
          <p>For big companies</p>
        </div>
        <div>
          <p>$18.99 <span>per month</span></p>
          <p>Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing.</p>
        </div>
        <div>
          <ul>
            <li>30 Gb of space</li>
            <li>90 days of file recovery</li>
            <li>MS Office 365 integration</li>
            <li>Unlimited third-party integrations</li>
            <li>Remote wipe</li>
          </ul>
        </div>
      </div>

      <Button color='green'>Get Started</Button>
    </section>
  );
};

export default Pricing;
