import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Coordinates from '../components/Detailspage/Coordinates';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Coordinates component', () => {
  it('should render the component with correct data', () => {
    const initialState = {
      main: {
        data: {
          coord: {
            lon: 12.345,
            lat: 67.89,
          },
        },
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Coordinates />
      </Provider>,
    );

    expect(screen.getByTestId('kano1')).toBeInTheDocument();
    expect(screen.getByTestId('state1')).toBeInTheDocument();
    expect(screen.getByTestId('coord')).toBeInTheDocument();
    expect(screen.getByTestId('stat1')).toBeInTheDocument();
    expect(screen.getByText('Longitude: 12.345')).toBeInTheDocument();
    expect(screen.getByText('Latitude: 67.89')).toBeInTheDocument();
  });
});
