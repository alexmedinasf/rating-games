import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/navbar/Navbar.component';

let component;

describe('Navbar component', () => {
  beforeEach(() => {
    component = render(<Navbar />, { wrapper: BrowserRouter });
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to the homepage when clicking the home logo', () => {
    const homeLink = screen.getByRole('link', { name: 'Home' });

    userEvent.click(homeLink);

    expect(window.location.pathname).toBe('/');
  });
});
