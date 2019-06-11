import React from 'react';
import { connect } from 'react-redux';
import { usersSelector } from '../selector';
import get from 'lodash/get';

const Users = ({ items }) => (
  <div>
    <h1>Users</h1>
    <ul>
      {items.map((item, idx) => <li key={idx}>{get(item, 'username', '')}</li>)}
    </ul>
  </div>
);

export default connect(
  state => ({ items: usersSelector(state) }),
  {}
)(Users);
