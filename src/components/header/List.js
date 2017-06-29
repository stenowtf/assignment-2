import React from 'react';
import { List } from 'semantic-ui-react';

const HeaderList = () => (
  <List horizontal link>
    <List.Item as='a'>Features</List.Item>
    <List.Item as='a'>Pricing</List.Item>
    <List.Item as='a'>Contact us</List.Item>
  </List>
);

export default HeaderList;
