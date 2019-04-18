import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Quiz from '../Quiz';
import QuizIntro from '../QuizIntro';
import numbers from '../../lib/numbers';

const QuizNumbers = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedNumbers = numbers.sort(() => 0.5 - Math.random());

  return (
    <>
      <Helmet>
        <title>Kanji numbers - Japanese Quiz</title>
      </Helmet>
      {startQuiz ? (
        <Quiz
          questions={randomizedNumbers}
          placeholder="Enter number or sound"
        />
      ) : (
        <QuizIntro
          name="Kanji - Basic Numbers"
          instructions="To complete this quiz, type in either the sound or number corresponding to each kanji character. The quiz includes 1-10, 100, 1000, and 10000."
          onStart={() => setStartQuiz(true)}
        />
      )}
    </>
  );
};

export default QuizNumbers;
