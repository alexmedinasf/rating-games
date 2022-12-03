import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsPage from '../pages/details-page/details-page';

const renderDetailsList = () => {
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <DetailsPage />
      </Provider>
    </BrowserRouter>,
  );
  return container;
};

describe('My Details page component', () => {
  it('renders correctly', () => {
    expect(renderDetailsList()).toMatchSnapshot();
  });
});
