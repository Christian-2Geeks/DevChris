import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './assets/styles/App.scss';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
