import React, { useState } from 'react';
import styled from '@emotion/styled';
import useCookie from 'react-use-cookie';
import Quiz from '../Quiz';
import QuizIntro from '../QuizIntro';

// Character sets
import hiragana from '../../lib/hiragana';
import katakana from '../../lib/katakana';

const OptionsForm = styled.form`
  margin-bottom: 1em;
`;

const OptionCheck = styled.input`
  margin-right: 1em;
  margin-bottom: 1em;
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

  const setSettingsOption = setting => {
    setSettings(
      JSON.stringify({
        ...settingsObj,
        ...setting,
      })
    );
  };

  return (
    <>
      {startQuiz ? (
        <Quiz questions={questions} />
      ) : (
        <QuizIntro
          name="Hiragana &amp; Katakana"
          instructions="To complete this quiz, type in the sound or romaji of each character. Focus on your speed and accuracy."
          onStart={() => setStartQuiz(true)}
        >
          <OptionsForm>
            <div>
              <label>
                <OptionCheck
                  name="hiragana"
                  type="checkbox"
                  checked={settingsObj.hiragana}
                  onChange={() =>
                    setSettingsOption({
                      hiragana: !settingsObj.hiragana,
                    })
                  }
                />
                <strong>Hiragana</strong> ひらがな
              </label>
            </div>
            <div>
              <label>
                <OptionCheck
                  name="katakana"
                  type="checkbox"
                  checked={settingsObj.katakana}
                  onChange={() =>
                    setSettingsOption({
                      katakana: !settingsObj.katakana,
                    })
                  }
                />
                <strong>Katakana</strong> カタカナ
              </label>
            </div>
          </OptionsForm>
        </QuizIntro>
      )}
    </>
  );
};

export default QuizKana;
