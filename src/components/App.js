import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './Nav';

// Quizes
import QuizKana from './QuizKana';
import QuizAdjectives from './QuizAdjectives';
import QuizVerbs from './QuizVerbs';
import QuizVerbsMore from './QuizVerbsMore';
import KanjiNumbers from './KanjiNumbers';
import KanjiWeekdays from './KanjiWeekdays';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={QuizKana} />
              <Route path="/numbers" component={KanjiNumbers} />
              <Route path="/adjectives" component={QuizAdjectives} />
              <Route path="/verbs" component={QuizVerbs} />
              <Route path="/verbs-more" component={QuizVerbsMore} />
              <Route path="/kanji-weekdays" component={KanjiWeekdays} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
