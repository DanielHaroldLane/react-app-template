import React from 'react';
import { shallow } from 'enzyme';
import { TestComponent } from '../TestComponent';

describe('<TestComponent />', () => {
  it('should render name', () => {
    const expectedName = 'Dan';

    const wrapper = shallow(<TestComponent name={expectedName} />);

    expect(wrapper.contains(expectedName)).toBe(true);
  });
});
