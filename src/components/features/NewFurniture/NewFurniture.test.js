import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NewFurniture from './NewFurniture';

// Create a mock store
const mockStore = configureStore([]);

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    // Provide the mock store to the component
    const store = mockStore({});
    const component = shallow(
      <Provider store={store}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
