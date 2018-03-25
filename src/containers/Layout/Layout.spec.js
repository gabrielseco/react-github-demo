import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReposPage } from './../../components';

import Layout from './Layout';

describe('Layout suite', () => {
  it('renders Layout', () => {
    const routes = (
      <Switch>
        <Route path="/" component={ReposPage} />
      </Switch>
    );
    const comp = (
      <Router>
        <Layout routes={routes} onChange={() => {}} />
      </Router>
    );
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
