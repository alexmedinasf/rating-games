const FETCH_GAMES = 'gameMetrics/games/FETCH_GAMES';

const fetchGames = (gamesList) => ({
  type: FETCH_GAMES,
  payload: gamesList,
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

export { fetchGames };
export default gamesReducer;
