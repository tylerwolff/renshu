import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import VocabularyQuiz from '../VocabularyQuiz';
import QuizIntro from '../QuizIntro';
import adjectives from '../../lib/adjectives';

const Adjectives = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedAdjectives = adjectives.vocabulary.sort(
    () => 0.5 - Math.random()
  );

  return (
    <>
      <Helmet>
        <title>Adjectives - Japanese Quiz</title>
      </Helmet>
      {startQuiz ? (
        <VocabularyQuiz
          words={randomizedAdjectives}
          placeholder="Enter english translation"
          question="hiragana"
          hint="romaji"
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

export default Adjectives;
