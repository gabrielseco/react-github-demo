import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ReposPage from './ReposPage';

describe('ReposPage suite', () => {
  it('renders RepoPage', () => {
    const comp = <ReposPage isLoading username="gabrielseco" />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
