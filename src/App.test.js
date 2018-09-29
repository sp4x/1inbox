import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fs from 'fs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App fs={fs} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
