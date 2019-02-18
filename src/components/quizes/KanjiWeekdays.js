import React, { useState } from 'react';
import VocabularyQuiz from '../VocabularyQuiz';
import QuizIntro from '../QuizIntro';
import Text from '../Text';
import weekdays from '../../lib/weekdays';

const QuizNumbers = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const vocabulary = weekdays.vocabulary
    .slice(0)
    .sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <VocabularyQuiz
          words={vocabulary}
          placeholder="Enter english translation"
          question="kanji"
          hint="hiragana"
        />
      ) : (
        <QuizIntro
          name="Kanji - Weekdays"
          instructions="To complete this quiz, type in the English weekday corresponding to each japanese word."
          onStart={() => setStartQuiz(true)}
        >
          <Text>
            <a
              href="https://nipponrama.com/days-week-japanese/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </Text>
        </QuizIntro>
      )}
    </>
  );
};

export default QuizNumbers;
