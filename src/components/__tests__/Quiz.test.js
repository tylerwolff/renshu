import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quiz from '../Quiz';
import hiragana from '../../lib/hiragana';
import hiraganaYoon from '../../lib/hiragana-yoon';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Quiz questions={hiragana, hiraganaYoon} />).toJSON();
  expect(tree).toMatchSnapshot();
});
