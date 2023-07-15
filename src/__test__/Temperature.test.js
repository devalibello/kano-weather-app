import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Temperature from '../components/Detailspage/Temperature';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Temperature component', () => {
  it('should render the component with correct data', () => {
    const initialState = {
      main: {
        data: {
          main: {
            temp: 300,
            feels_like: 300,
            temp_min: 200,
            temp_max: 300,
            pressure: 100,
            humidity: 50,
          },
        },
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Temperature />
      </Provider>
    );

    expect(screen.getByTestId('kano2')).toBeInTheDocument();
    expect(screen.getByTestId('state2')).toBeInTheDocument();
    expect(screen.getByTestId('temp')).toBeInTheDocument();
    expect(screen.getByTestId('stat2')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 300')).toBeInTheDocument();
    expect(screen.getByText('Feels Like: 300')).toBeInTheDocument();
    expect(screen.getByText('Minimum Temperature: 200')).toBeInTheDocument();
    expect(screen.getByText('Maximum Temperature: 300')).toBeInTheDocument();
    expect(screen.getByText('Pressure: 100')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 50')).toBeInTheDocument();
  });
});
