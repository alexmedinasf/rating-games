const FETCH_GAMES = 'gameMetrics/games/FETCH_GAMES';
const FETCH_CATEGORIES = 'gameMetrics/games/FETCH_CATEGORIES'

const fetchGames = (gamesList) => ({
  type: FETCH_GAMES,
  payload: gamesList,
});

const fetchCategories = (gameCategories) => ({
    type: FETCH_CATEGORIES,
    payload: gameCategories,
  });

const preloadedState = {
  gamesList: [],
};

const gamesReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        gamesList: action.payload,
      };

    default:
      return state;
  }
};

export { fetchGames, fetchCategories };
export default gamesReducer;
