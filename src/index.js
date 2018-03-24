// @flow
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './containers';

import './stylesheets/index.scss';

const app = (
  <Router>
    <App />
  </Router>
);

render(app, document.getElementById('root'));
