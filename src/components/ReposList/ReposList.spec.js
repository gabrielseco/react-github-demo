import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ReposList from './ReposList';
import RepoItem from './../RepoItem/RepoItem';
import { repos } from './repos';

describe('ReposList suite', () => {
  it('renders ReposList without any state injected', () => {
    const reposMock = [repos[0], repos[1]];
    const comp = <ReposList repos={reposMock} />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    const reposChildren = component.find(RepoItem);
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
    expect(reposChildren.length).toBe(2);
  });
});
