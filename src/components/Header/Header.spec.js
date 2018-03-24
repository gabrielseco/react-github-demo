import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

describe('Header suite', () => {
  it('should render the Header component', () => {
    const component = shallow(<Header />);
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();

    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
