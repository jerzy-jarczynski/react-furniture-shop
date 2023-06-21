import { shallow } from 'enzyme';
import React from 'react';
import Deals from './Deals';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Deals', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Deals />
      </Provider>
    );
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
