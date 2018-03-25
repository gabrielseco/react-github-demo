import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchBox from './SearchBox';

describe('SearchBox suite', () => {
  const onChangeHandler = jest.fn();
  it('renders SearchBox without any state injected', () => {
    const comp = <SearchBox onChange={onChangeHandler} />;
    const component = shallow(comp);
    const tree = renderer.create(comp).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
    expect(onChangeHandler).not.toHaveBeenCalled();
  });

  it('should propagate the value with onChange prop handler', () => {
    const value = 'gabrielseco';
    const component = shallow(<SearchBox onChange={onChangeHandler} />);
    const input = component.find('input');

    input.simulate('change', {
      target: {
        value: value
      }
    });

    expect(onChangeHandler).toHaveBeenCalledWith({
      value: value
    });
  });
});
