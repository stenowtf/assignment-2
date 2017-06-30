import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { List } from 'semantic-ui-react';

import '../styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="Header">
      <Grid>
        <Row>
          <Col className="logo" sm={6} md={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="menu" sm={6} md={9}>
            <List horizontal link>
              <List.Item as='a'>Features</List.Item>
              <List.Item as='a'>Pricing</List.Item>
              <List.Item as='a'>Contact us</List.Item>
            </List>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default Header;
