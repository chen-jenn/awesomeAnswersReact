import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<h1>Hello World</h1>, //calling React.createElement, first argument is the h1
  document.getElementById('root')
);
registerServiceWorker();
