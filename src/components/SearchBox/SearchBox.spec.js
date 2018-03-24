import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchBox from './SearchBox';

describe('SearchBox suite', () => {
  it('renders SearchBox without any state injected', () => {
    const component = shallow(<SearchBox />);
    const tree = renderer.create(<SearchBox />).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
