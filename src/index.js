import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import getCategoriesFromApi from './services/categoryApi';
import { getGamesFromApi } from './services/gamesApi';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch((dispatch) => {
  dispatch(getCategoriesFromApi());
  dispatch(getGamesFromApi());
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
