import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App suite', () => {
  const component = shallow(<App />);
  it('renders App without any state injected', () => {
    expect(component).toBeDefined();
  });
});
