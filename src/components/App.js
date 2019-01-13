import React, { Component } from 'react';
import styled from '@emotion/styled';
import Quiz from './Quiz';

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

class App extends Component {
  render() {
    return (
      <div>
        <Quiz />
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
      </div>
    );
  }
}

export default App;
