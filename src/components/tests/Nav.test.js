import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Nav from '../Nav';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Router>
      <Nav />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
