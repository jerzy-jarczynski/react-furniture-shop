import React from 'react';
import { shallow } from 'enzyme';
import ProductSearch from './ProductSearch';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductSearch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
