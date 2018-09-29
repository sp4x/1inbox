import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const remote = require('electron').remote;
const fs = remote.require('fs');
ReactDOM.render(<App fs={fs} />, document.getElementById('root'));
registerServiceWorker();
