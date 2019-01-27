import React, { useState } from 'react';
import Quiz from './Quiz';
import QuizIntro from './QuizIntro';
import Text from './Text';
import Button from './Button';
import numbers from '../lib/numbers';

import { ReactComponent as ChevronRight } from '../assets/round-chevron_right-24px.svg';

const QuizNumbers = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedNumbers = numbers.sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <Quiz
          questions={randomizedNumbers}
          placeholder="Enter number or sound"
        />
      ) : (
        <QuizIntro>
          <h1>Kanji - Numbers</h1>
          <Text margin="0 0 2rem">
            To complete this quiz, type in either the sound or number
            corresponding to each kanji character. The quiz includes 1-10, 100,
            1000, and 10000.
          </Text>
          <Button onClick={() => setStartQuiz(true)}>
            Start quiz <ChevronRight />
          </Button>
        </QuizIntro>
      )}
    </>
  );
};

export default QuizNumbers;
