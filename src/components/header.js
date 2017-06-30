import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import List from './list';

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
            <List />
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default Header;
