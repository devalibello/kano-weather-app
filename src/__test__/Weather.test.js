import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Weather from '../components/Detailspage/Weather';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Weather component', () => {
  it('should render the component with correct data', () => {
    const initialState = {
      main: {
        data: {
          weather: [
            {
              main: 'Clouds',
              description: 'few clouds',
            },
          ],
        },
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Weather />
      </Provider>,
    );

    expect(screen.getByTestId('kano3')).toBeInTheDocument();
    expect(screen.getByTestId('state3')).toBeInTheDocument();
    expect(screen.getByTestId('weather')).toBeInTheDocument();
    expect(screen.getByTestId('stat3')).toBeInTheDocument();
    expect(screen.getByText('Condition: Clouds')).toBeInTheDocument();
    expect(screen.getByText('Description: few clouds')).toBeInTheDocument();
  });
});
