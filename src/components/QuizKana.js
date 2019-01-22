import React, { useState } from 'react';
import styled from '@emotion/styled';
import useCookie from 'react-use-cookie';
import Settings from './Settings';
import Quiz from './Quiz';

// Character sets
import hiragana from '../lib/hiragana';
import katakana from '../lib/katakana';

import { ReactComponent as SettingsIcon } from '../assets/round-settings-24px.svg';

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
    <div>
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
    </div>
  );
};

export default QuizKana;
