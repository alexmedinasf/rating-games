import { combineReducers } from 'redux';
import gamesReducer from './games/games.reducer';
import categoriesReducer from './categories/categories.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  games: gamesReducer,
});

export default rootReducer;
