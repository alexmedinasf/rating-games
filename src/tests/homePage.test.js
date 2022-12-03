import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GamesList from '../components/game-list-component/GameList.component';

const renderGamesList = () => {
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <GamesList />
      </Provider>
    </BrowserRouter>,
  );
  return container;
};

describe('My Games list component', () => {
  it('renders correctly', () => {
    expect(renderGamesList()).toMatchSnapshot();
  });
});
