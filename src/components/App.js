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
import QuizNumbers from './QuizNumbers';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={QuizKana} />
              <Route path="/numbers" component={QuizNumbers} />
              <Route path="/adjectives" component={QuizNumbers} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
