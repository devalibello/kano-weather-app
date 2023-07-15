import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Homepage/Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders Navbar component correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();

    const mainPageTitle = screen.queryByText('KANO WEATHER STATISTICS');
    expect(mainPageTitle).toBeInTheDocument();
  });
});
