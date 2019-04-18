import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuizIntro from '../QuizIntro';
import VocabularyQuiz from '../VocabularyQuiz';
import { basic } from '../../lib/verbs.json';

const Verbs = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = basic.sort(() => 0.5 - Math.random());

  return (
    <>
      <Helmet>
        <title>Verbs - Japanese Quiz</title>
      </Helmet>
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

export default Verbs;
