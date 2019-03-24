import React, { useState } from 'react';
import QuizIntro from '../QuizIntro';
import VocabularyQuiz from '../VocabularyQuiz';
import { basic_more } from '../../lib/verbs';

const QuizVerbsMore = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = basic_more.sort(() => 0.5 - Math.random());

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