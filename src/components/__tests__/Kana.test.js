import React from 'react';
import ReactDOM from 'react-dom';
import Kana from '../quizes/Kana';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kana />, div);
  ReactDOM.unmountComponentAtNode(div);
});
