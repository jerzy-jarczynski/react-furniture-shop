import React from 'react';
import { shallow } from 'enzyme';
import CompanyClaim from './CompanyClaim';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component CompanyClaim', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CompanyClaim />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
