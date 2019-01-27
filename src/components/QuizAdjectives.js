import React from 'react';
import Quiz from './Quiz';
import adjectives from '../lib/adjectives';

const QuizAdjectives = props => {
  const randomizedAdjectives = adjectives.sort(() => 0.5 - Math.random());
  return <Quiz questions={randomizedAdjectives} />;
};

export default QuizAdjectives;
