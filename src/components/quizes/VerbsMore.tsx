import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuizIntro from '../QuizIntro';
import VocabularyQuiz from '../VocabularyQuiz';
import { basic_more } from '../../lib/verbs.json';

const VerbsMore = (props: any) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = basic_more.sort(() => 0.5 - Math.random());

  return (
    <>
      <Helmet>
        <title>More Verbs - Japanese Quiz</title>
      </Helmet>
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

export default VerbsMore;
