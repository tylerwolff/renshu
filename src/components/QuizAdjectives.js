import React from 'react';
import Quiz from './Quiz';
import numbers from '../lib/numbers';

const QuizAdjectives = props => {
  const randomizedNumbers = numbers.sort(() => 0.5 - Math.random());
  return <Quiz questions={randomizedNumbers} />;
};

export default QuizAdjectives;
