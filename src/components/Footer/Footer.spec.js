import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer suite', () => {
  it('should render the Footer component', () => {
    const component = shallow(<Footer />);
    const tree = renderer.create(<Footer />).toJSON();

    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
