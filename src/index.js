// @flow
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { App, Layout } from './containers';
import routes from './routes';

import './stylesheets/index.scss';

const app = (
  <Router>
    <App
      routes={routes}
      render={({ username, isLoading, onChange }) => {
        const routing = routes({
          username: username,
          isLoading: isLoading
        });
        return <Layout routes={routing} onChange={onChange} />;
      }}
    />
  </Router>
);

render(app, document.getElementById('root'));
