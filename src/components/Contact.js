import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <h2>For more information about the services we offer, and how we can work with you, please provide us with the following information.</h2>
      <p>Fields marked by <span className="asterisc">*</span> are required</p>

      <Form>
        <Form.Field>
          <input placeholder='Your name' />
          <label><span className="asterisc">*</span> First name and last name</label>
        </Form.Field>
        <Form.Field>
          <input placeholder='Email address' />
          <label><span className="asterisc">*</span> Response will be sent to this email</label>
        </Form.Field>
        <Form.Field>
          <input placeholder='Phone number' />
          <label>We’ll call you if you prefer</label>
        </Form.Field>
        <Button color='green' type='submit'>Submit</Button>
      </Form>
    </section>
  );
};

export default Contact;
