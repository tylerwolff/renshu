import React from 'react';
import Quiz from './Quiz';

// Character sets
import hiragana from '../lib/hiragana';
import katakana from '../lib/katakana';

// TODO: customize what can be tested per user

const QuizKana = props => {
  const kana = hiragana.concat(katakana).sort(() => 0.5 - Math.random());

  return <Quiz questions={kana} />;
};

export default QuizKana;
