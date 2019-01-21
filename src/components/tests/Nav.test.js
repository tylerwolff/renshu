import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Nav from '../Nav';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Nav />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
