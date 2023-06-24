import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import SearchPage from './SearchPage';

describe('Component SearchPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
