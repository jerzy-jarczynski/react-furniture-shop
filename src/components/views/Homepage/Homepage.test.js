import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

jest.mock('nanoid', () => {
  return { nanoid: () => '1234' };
});

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
