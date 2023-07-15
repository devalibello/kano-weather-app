import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Wind from '../components/Detailspage/Wind';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Wind component', () => {
  it('should render the component with correct data', () => {
    const initialState = {
      main: {
        data: {
          wind: {
            speed: 2.57,
            deg: 310,
          },
        },
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Wind />
      </Provider>
    );

    expect(screen.getByTestId('kano4')).toBeInTheDocument();
    expect(screen.getByTestId('state4')).toBeInTheDocument();
    expect(screen.getByTestId('wind')).toBeInTheDocument();
    expect(screen.getByTestId('stat4')).toBeInTheDocument();
    expect(screen.getByText('Speed: 2.57')).toBeInTheDocument();
    expect(screen.getByText('Degree: 310')).toBeInTheDocument();
  });
});
