import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import useCookie from 'react-use-cookie';
import Button from './Button';
import { ReactComponent as CloseIcon } from '../assets/round-clear-24px.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  overflow-y: auto;
  animation: ${fadeIn} 0.25s ease-out;
`;

const CloseButton = styled.button`
  float: right;
  background: none;
  border: 0;
  cursor: pointer;
`;

const Heading = styled.h1`
  padding-bottom: 0.875em;
  border-bottom: 1px solid #000;
`;

const OptionsForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const OptionCheck = styled.input`
  margin-right: 1em;
`;

const AppInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1em;
  font-size: 1em;
  opacity: 0.75;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`;

const Text = styled.span`
  color: ${({ color }) => color};
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

const Settings = props => {
  const [settings, setSettings] = useCookie('quizKana', getInitialSettings());
  const settingsObj = JSON.parse(settings);

  const handleCheck = key => {
    setSettings(
      JSON.stringify({
        ...settingsObj,
        [key]: !settingsObj[key],
      })
    );
  };

  const renderRow = r => (
    <p key={r.key}>
      <strong>{r.name}</strong> · <Text color="#666">{r.description}</Text>
    </p>
  );

  return (
    <Overlay>
      <div style={{ minWidth: '50%' }}>
        <Heading>
          Your settings{' '}
          <CloseButton type="button" onClick={props.onClose}>
            <CloseIcon />
          </CloseButton>
        </Heading>
        <OptionsForm>
          <div>
            <h3>
              <OptionCheck
                name="hiragana"
                type="checkbox"
                checked={settingsObj.hiragana}
                onChange={() => handleCheck('hiragana')}
              />
              Hiragana ひらがな
            </h3>
          </div>
          <div>
            <h3>
              <OptionCheck
                name="katakana"
                type="checkbox"
                checked={settingsObj.katakana}
                onChange={() => handleCheck('katakana')}
              />
              Katakana カタカナ
            </h3>
          </div>
        </OptionsForm>
        <Button type="button" onClick={() => props.onSave(settingsObj)}>
          Save
        </Button>
      </div>
      <AppInfo>
        Made by{' '}
        <a
          href="https://tylerwolff.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tw
        </a>
      </AppInfo>
    </Overlay>
  );
};

export default Settings;
