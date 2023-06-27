import React from 'react';
import { shallow } from 'enzyme';
import Newsletter from './Newsletter';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductSearch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Newsletter />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
