import React from 'react';
import { shallow } from 'enzyme';
import CartProductCard from './CartProductCard';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';

describe('Component CardProductCard', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CartProductCard />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
