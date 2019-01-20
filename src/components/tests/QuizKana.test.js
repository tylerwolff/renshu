import React from 'react';
import ReactDOM from 'react-dom';
import QuizKana from '../QuizKana';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuizKana />, div);
  ReactDOM.unmountComponentAtNode(div);
});
