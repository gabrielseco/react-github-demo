import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Header suite', () => {
  it('should render the Header component', () => {
    const component = shallow(<Header />);
    const tree = renderer.create(<Header />).toJSON();

    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
