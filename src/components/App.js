import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './Nav';

// Quizes
import QuizKana from './quizes/QuizKana';
import QuizAdjectives from './quizes/QuizAdjectives';
import QuizVerbs from './quizes/QuizVerbs';
import QuizVerbsMore from './quizes/QuizVerbsMore';
import KanjiNumbers from './quizes/KanjiNumbers';
import KanjiWeekdays from './quizes/KanjiWeekdays';

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
