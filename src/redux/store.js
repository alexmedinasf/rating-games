import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = configureStore(rootReducer, undefined, composedEnhancers);

export default store;
    