import React from 'react';
import { shallow } from 'enzyme';
import FeaturedProduct from './FeaturedProduct';

describe('Component FeaturedProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProduct />);
    expect(component).toBeTruthy();
  });
});
