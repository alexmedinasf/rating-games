// Const for the actions
const FETCH_CATEGORIES = 'gameMetrics/games/FETCH_CATEGORIES';

// Function to Fetch data
const fetchCategories = (gameCategories) => ({
  type: FETCH_CATEGORIES,
  payload: gameCategories,
});

// Initial State
const preloadedState = {
  gamesList: [],
};

// Reducer for Categories
const categoriesReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload,
      };

    default:
      return state;
  }
};

export { fetchCategories };
export default categoriesReducer;
