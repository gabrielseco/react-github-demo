import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import { NavItem } from './../NavItem';

describe('NavBar suite', () => {
  it('should render the NavBar component', () => {
    const navigation = (
      <NavBar>
        <NavItem URL="/repos">Repos</NavItem>
        <NavItem URL="/orgs">orgs</NavItem>
      </NavBar>
    );
    const component = shallow(navigation);
    const tree = renderer.create(<Router>{navigation}</Router>).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();

    expect(component.find(NavItem).length).toBe(2);
  });
});
