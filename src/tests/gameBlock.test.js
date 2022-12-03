import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GameBlock from '../components/game-block-component/GameBlock.component';

let component;

describe('My Games block component', () => {
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <GameBlock />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to the details page when clicking an image link', () => {
    const imageLink = document.querySelector('.game-link-a');

    fireEvent.click(imageLink);

    expect(window.location.pathname).toBe('/game-details');
  });
});
