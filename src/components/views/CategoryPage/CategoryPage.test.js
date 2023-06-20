import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import CategoryPage from './CategoryPage';

describe('Component CategoryPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CategoryPage />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
