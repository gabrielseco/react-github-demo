import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RepoItem from './RepoItem';
import { repos } from './../ReposList/repos';

describe('RepoItem suite', () => {
  it('should render the RepoItem component', () => {
    const comp = <RepoItem repo={repos[0]} />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
