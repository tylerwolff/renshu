import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TextInput } from '../ui';

it('renders correctly', () => {
  const tree = TestRenderer.create(<TextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
