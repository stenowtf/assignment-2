import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>For more information about the services we offer, and how we can work with you please provide us with the following items of information.</p>
      <p>Fields marked by * are required</p>

      <Form>
        <Form.Field width={6}>
          <input placeholder='Your name' />
          <label><span>*</span> First name and last name</label>
        </Form.Field>
        <Form.Field width={6}>
          <input placeholder='Email address' />
          <label><span>*</span> Response will be sent to this email</label>
        </Form.Field>
        <Form.Field width={6}>
          <input placeholder='Phone number' />
          <label>We’ll call you if you prefer</label>
        </Form.Field>
        <Button color='green' type='submit'>Submit</Button>
      </Form>
    </section>
  );
};

export default Contact;
