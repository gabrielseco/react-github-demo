import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavItem from './NavItem';

describe('NavItem suite', () => {
  it('should render the NavItem component', () => {
    const url = '/repos';
    const name = 'Repos';
    const navItem = <NavItem URL={url}>{name}</NavItem>;
    const navItemToSnapshot = <Router>{navItem}</Router>;
    const component = shallow(navItem);
    const tree = renderer.create(navItemToSnapshot).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();

    expect(component.find(Link).prop('to')).toBe(url);
    expect(component.find(Link).prop('children')).toBe(name);
  });
});
