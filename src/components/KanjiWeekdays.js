import React, { useState } from 'react';
import VocabularyQuiz from './VocabularyQuiz';
import QuizIntro from './QuizIntro';
import weekdays from '../lib/weekdays';

const QuizNumbers = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const vocabulary = weekdays.vocabulary
    .slice(0)
    .sort(() => 0.5 - Math.random());
  console.log(weekdays.vocabulary);
  return (
    <>
      {startQuiz ? (
        <VocabularyQuiz
          words={vocabulary}
          placeholder="Enter english translation"
          hint="hiragana"
        />
      ) : (
        <QuizIntro
          name="Kanji - Weekdays"
          instructions="To complete this quiz, type in the English weekday corresponding to each japanese word."
          onStart={() => setStartQuiz(true)}
        />
      )}
    </>
  );
};

export default QuizNumbers;
