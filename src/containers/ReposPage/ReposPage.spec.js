import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ReposPage from './ReposPage';

describe('ReposPage suite', () => {
  it('renders RepoPage without any state injected', () => {
    const component = shallow(<ReposPage />);
    const tree = renderer.create(<ReposPage />).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
