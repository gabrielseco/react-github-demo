import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import OrgsPage from './OrgsPage';

describe('OrgsPage suite', () => {
  it('renders OrgsPage without any state injected', () => {
    const component = shallow(<OrgsPage />);
    const tree = renderer.create(<OrgsPage />).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
