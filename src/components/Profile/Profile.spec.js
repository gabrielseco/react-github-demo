import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Profile from './Profile';
import { user } from './../../containers/OrgsPage/orgs';

describe('Profile suite', () => {
  it('should render the Profile component', () => {
    const comp = <Profile data={user} />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
