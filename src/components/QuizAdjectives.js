import React, { useState } from 'react';
import Quiz from './Quiz';
import QuizIntro from './QuizIntro';
import adjectives from '../lib/adjectives';

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
        <QuizIntro
          name="Adjectives"
          instructions={
            <span>
              To complete this quiz, type in the English translation of each
              adjective. The quiz includes both <strong>i</strong> and{' '}
              <strong>na</strong> adjectives.
            </span>
          }
          onStart={() => setStartQuiz(true)}
        />
      )}
    </>
  );
};

export default QuizAdjectives;
