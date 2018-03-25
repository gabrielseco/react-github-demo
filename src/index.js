// @flow
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { App, Layout } from './containers';
import routes from './routes';

import './stylesheets/index.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
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
  </Provider>
);

render(app, document.getElementById('root'));
