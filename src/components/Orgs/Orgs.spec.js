import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Orgs from './Orgs';
import { orgs } from './../../containers/OrgsPage/orgs';

describe('Orgs suite', () => {
  it('should render the Orgs component', () => {
    const comp = <Orgs orgs={orgs} />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
