import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import useCookie from 'react-use-cookie';
import VocabularyQuiz from '../VocabularyQuiz';
import QuizIntro from '../QuizIntro';
import adjectives from '../../lib/adjectives.json';

interface SettingObject {
  showRomaji?: boolean;
}

const OptionsForm = styled.form`
  margin-bottom: 1em;
`;

const OptionCheck = styled.input`
  margin-right: 1em;
  margin-bottom: 1em;
`;

const getInitialSettings = (): string => {
  return JSON.stringify({
    showRomaji: true,
  });
};

const Adjectives = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [settings, setSettings] = useCookie('vocabularyQuiz', getInitialSettings());
  const settingsObj = JSON.parse(settings);
  
  const randomizedAdjectives = adjectives.vocabulary.sort(
    () => 0.5 - Math.random()
  );

  const setSettingsOption = (setting: SettingObject) => {
    setSettings(
      JSON.stringify({
        ...settingsObj,
        ...setting,
      })
    );
  };

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
          hint={settingsObj.showRomaji ? "romaji" : ""}
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
        >

          <OptionsForm>
            <div>
              <label>
                <OptionCheck
                  name="showRomaji"
                  type="checkbox"
                  checked={settingsObj.showRomaji}
                  onChange={() =>
                    setSettingsOption({
                      showRomaji: !settingsObj.showRomaji,
                    })
                  }
                />
                <strong>Show Romaji</strong>
              </label>
            </div>
          </OptionsForm>
        </QuizIntro>
      )}
    </>
  );
};

export default Adjectives;
