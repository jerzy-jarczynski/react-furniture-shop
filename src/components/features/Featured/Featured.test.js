import React from 'react';
import { shallow } from 'enzyme';
import Featured from './Featured';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Featured', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Featured />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
