import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { Layout } from './../../containers';
import routes from './../../routes';

describe('App suite', () => {
  it('renders App without any state injected', () => {
    const comp = (
      <App
        render={({ username, isLoading }) => {
          const routing = routes({
            username: username,
            isLoading: isLoading
          });
          return (
            <Router>
              <Layout routes={routing} onChange={() => {}} />
            </Router>
          );
        }}
      />
    );
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
