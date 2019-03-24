import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ProgressBar } from '../ui';

it('renders correctly', () => {
  const tree = TestRenderer.create(<ProgressBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
