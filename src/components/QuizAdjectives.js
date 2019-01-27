import React, { useState } from 'react';
import Quiz from './Quiz';
import QuizIntro from './QuizIntro';
import Text from './Text';
import Button from './Button';
import adjectives from '../lib/adjectives';
import { ReactComponent as ChevronRight } from '../assets/round-chevron_right-24px.svg';

const QuizAdjectives = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedAdjectives = adjectives.sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <Quiz
          questions={randomizedAdjectives}
          placeholder="Enter english translation"
        />
      ) : (
        <QuizIntro>
          <h1>Adjectives</h1>
          <Text margin="0 0 2rem">
            To complete this quiz, type in the English translation of each
            adjective. The quiz includes both <strong>i</strong> and{' '}
            <strong>na</strong> adjectives.
          </Text>
          <Button onClick={() => setStartQuiz(true)}>
            Start quiz <ChevronRight />
          </Button>
        </QuizIntro>
      )}
    </>
  );
};

export default QuizAdjectives;
