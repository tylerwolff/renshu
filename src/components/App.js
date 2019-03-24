import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './Nav';

// Quizes
import Kana from './quizes/Kana';
import Adjectives from './quizes/Adjectives';
import Verbs from './quizes/Verbs';
import VerbsMore from './quizes/VerbsMore';
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
              <Route exact path="/" component={Kana} />
              <Route path="/numbers" component={KanjiNumbers} />
              <Route path="/adjectives" component={Adjectives} />
              <Route path="/verbs" component={Verbs} />
              <Route path="/verbs-more" component={VerbsMore} />
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
