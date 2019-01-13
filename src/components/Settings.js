import React, { Component } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import ROWS from '../lib/rows';
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
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: 0;
  cursor: pointer;
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

class Settings extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <Overlay>
        <CloseButton type="button" onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <div>
          <h1>Your settings</h1>
          {Object.values(ROWS).map(r => (
            <p key={r}>{r}</p>
          ))}
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
  }
}

export default Settings;
