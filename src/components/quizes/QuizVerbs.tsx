import React, { useState } from 'react';
import QuizIntro from '../QuizIntro';
import VocabularyQuiz from '../VocabularyQuiz';
import { basic } from '../../lib/verbs.json';

const QuizVerbs = (props: any) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = basic.sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <VocabularyQuiz words={words} placeholder="Enter english translation" />
      ) : (
        <QuizIntro
          name="Verbs - Basics"
          instructions="To complete this quiz, type in the English translation of each verb."
          onStart={() => setStartQuiz(true)}
        />
      )}
    </>
  );
};

export default QuizVerbs;
