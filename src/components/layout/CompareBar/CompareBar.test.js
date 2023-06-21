import { shallow } from 'enzyme';
import React from 'react';
import CompareBar from './CompareBar';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component CompareBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CompareBar />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    const component = shallow(<CompareBar />);
    expect(component).toBeTruthy();
    expect(wrapper.exists()).toBeTruthy();
  });
});
