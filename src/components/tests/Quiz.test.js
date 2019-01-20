import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quiz from '../Quiz';
import hiragana from '../../lib/hiragana';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Quiz questions={hiragana} />).toJSON();
  expect(tree).toMatchSnapshot();
});
