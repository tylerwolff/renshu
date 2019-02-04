import React, { useState } from 'react';
import QuizIntro from './QuizIntro';
import VocabularyQuiz from './VocabularyQuiz';
import { verbs2 } from '../lib/verbs';

const QuizVerbsMore = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = verbs2.sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <VocabularyQuiz words={words} placeholder="Enter english translation" />
      ) : (
        <QuizIntro
          name="Verbs - More"
          instructions="To complete this quiz, type in the English translation of each verb."
          onStart={() => setStartQuiz(true)}
        />
      )}
    </>
  );
};

export default QuizVerbsMore;
