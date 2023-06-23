import { shallow } from 'enzyme';
import React from 'react';
import CompanyClaim from './CompanyClaim';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component CompanyClaim', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CompanyClaim />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    const component = shallow(<CompanyClaim />);
    expect(component).toBeTruthy();
    expect(wrapper.exists()).toBeTruthy();
  });
});
