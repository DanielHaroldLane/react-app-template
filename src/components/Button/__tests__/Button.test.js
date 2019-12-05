import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';

describe('<Button />', () => {
  it('should render text', () => {
    const expectedText = 'CLICK ME!';

    const wrapper = shallow(<Button text={expectedText} />);

    expect(wrapper.contains(expectedText)).toBe(true);
  });

  it('should call onClick', () => {
    const onClickMock = jest.fn();

    const expectedText = 'CLICK ME!';

    const wrapper = shallow(
      <Button text={expectedText} onClick={onClickMock} />
    );

    wrapper.simulate('click');

    expect(wrapper.contains(expectedText)).toBe(true);
    expect(onClickMock).toHaveBeenCalled();
  });
});
