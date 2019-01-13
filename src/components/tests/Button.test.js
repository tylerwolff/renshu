import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../Button';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
