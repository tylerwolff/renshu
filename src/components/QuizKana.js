import React, { useState } from 'react';
import styled from '@emotion/styled';
import useCookie from 'react-use-cookie';
import Settings from './Settings';
import Quiz from './Quiz';
import QuizIntro from './QuizIntro';
import Text from './Text';
import Button from './Button';

// Character sets
import hiragana from '../lib/hiragana';
import katakana from '../lib/katakana';

import { ReactComponent as SettingsIcon } from '../assets/round-settings-24px.svg';
import { ReactComponent as ChevronRight } from '../assets/round-chevron_right-24px.svg';

const SettingsLink = styled.button`
  position: absolute;
  bottom: 1em;
  left: 1em;
  background: none;
  border: 0;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s ease-out;

  span {
    display: none;
    padding-left: 0.4em;
    vertical-align: middle;
  }

  &:hover {
    opacity: 1;

    span {
      display: inline-block;
    }
  }
`;

const getInitialSettings = () => {
  // TODO: enable full
  // return Object.keys(ROWS).reduce((acc, r) => {
  //   acc[r] = true;
  //   return acc;
  // }, {});

  return JSON.stringify({
    hiragana: true,
    katakana: true,
  });
};

const QuizKana = props => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useCookie('quizKana', getInitialSettings());
  const settingsObj = JSON.parse(settings);

  let chars = [];

  if (settingsObj) {
    if (settingsObj.hiragana) chars = hiragana;
    if (settingsObj.katakana) chars = chars.concat(katakana);
  } else {
    chars = hiragana.concat(katakana);
  }

  const questions = chars.sort(() => 0.5 - Math.random());

  return (
    <>
      {startQuiz ? (
        <>
          <Quiz questions={questions} />
          <SettingsLink type="button" onClick={() => setShowSettings(true)}>
            <SettingsIcon />
            <span>Settings</span>
          </SettingsLink>
          {showSettings && (
            <Settings
              settings={settingsObj}
              onClose={() => setShowSettings(false)}
              onSave={settings => {
                setSettings(JSON.stringify(settings));
                setShowSettings(false);
              }}
            />
          )}
        </>
      ) : (
        <QuizIntro>
          <h1>Hiragana &amp; Katakana</h1>
          <Text margin="0 0 2rem">
            To complete this quiz, type in the sound or romaji of each
            character. Focus on your speed and accuracy.
          </Text>
          <Button onClick={() => setStartQuiz(true)}>
            Start quiz <ChevronRight />
          </Button>
        </QuizIntro>
      )}
    </>
  );
};

export default QuizKana;
