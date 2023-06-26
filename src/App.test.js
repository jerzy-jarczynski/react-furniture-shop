import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('nanoid', () => {
  return { nanoid: () => '1234' };
});

it('renders without crashing', () => {
  shallow(<App />);
});
