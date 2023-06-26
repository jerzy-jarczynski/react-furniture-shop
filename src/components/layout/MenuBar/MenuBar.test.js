import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from './MenuBar';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Router>
        <MenuBar />
      </Router>
    );
    expect(component).toBeTruthy();
  });
});
