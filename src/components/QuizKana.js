import React, { Component } from 'react';
import styled from '@emotion/styled';
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

// TODO: customize what can be tested per user
class QuizKana extends Component {
  state = {
    showSettings: false,
  };

  render() {
    const { showSettings } = this.state;
    const kana = hiragana.concat(katakana).sort(() => 0.5 - Math.random());

    return (
      <div>
        <Quiz questions={kana} />
        <SettingsLink
          type="button"
          onClick={() => this.setState({ showSettings: true })}
        >
          <SettingsIcon />
          <span>Settings</span>
        </SettingsLink>
        {showSettings && (
          <Settings onClose={() => this.setState({ showSettings: false })} />
        )}
      </div>
    );
  }
}

export default QuizKana;
