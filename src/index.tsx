import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/theme.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (!process.env.REACT_APP_API_TOKEN || !process.env.REACT_APP_API_URL) {
  throw new Error('You need configure the environment variables for API_URL and API_TOKEN');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
