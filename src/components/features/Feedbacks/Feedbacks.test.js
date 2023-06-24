import React from 'react';
import { shallow } from 'enzyme';
import Feedbacks from './Feedbacks';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Feedbacks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Feedbacks />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
