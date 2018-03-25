import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import OrgsPage from './OrgsPage';

describe('OrgsPage suite', () => {
  it('renders OrgsPage', () => {
    const comp = <OrgsPage isLoading username="gabrielseco" />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
