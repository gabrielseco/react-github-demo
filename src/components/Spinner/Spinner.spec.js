import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Spinner from './Spinner';

describe('Spinner suite', () => {
  it('should render the Spinner component', () => {
    const component = shallow(<Spinner />);
    const tree = renderer.create(<Spinner />).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
