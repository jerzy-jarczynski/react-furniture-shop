import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

describe('Component Feedback', () => {
  it('should render without crashing', () => {
    const component = shallow(<Feedback />);
    expect(component).toBeTruthy();
  });
});
