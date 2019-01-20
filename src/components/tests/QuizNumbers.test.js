import React from 'react';
import ReactDOM from 'react-dom';
import QuizNumbers from '../QuizNumbers';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuizNumbers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
