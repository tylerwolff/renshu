import React from 'react';
import ReactDOM from 'react-dom';
import KanjiNumbers from '../quizes/KanjiNumbers';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KanjiNumbers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
