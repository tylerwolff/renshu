import React, { Component } from 'react';
import styled from '@emotion/styled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Settings from './Settings';

// Quizes
import QuizKana from './QuizKana';
import QuizNumbers from './QuizNumbers';

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

class App extends Component {
  state = {
    showSettings: false,
  };

  render() {
    const { showSettings } = this.state;

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={QuizKana} />
            <Route path="/numbers" component={QuizNumbers} />
            <Redirect to="/" />
          </Switch>
        </Router>
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

export default App;
