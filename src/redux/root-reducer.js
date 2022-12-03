import { combineReducers } from 'redux';
import gamesReducer from './games/games.reducer';
import categoriesReducer from './categories/categories.reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  categories: categoriesReducer,
});

export default rootReducer;
