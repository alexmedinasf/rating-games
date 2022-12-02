import { fetchGames } from '../redux/games/games.reducer';

// Base URL
const baseUrl = 'https://api.rawg.io/api/games?key=a053a797bc3f4e4e889c128317b22e13';

// API Action
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(baseUrl);
  const response = await data.json();

  const gamesList = response;

  dispatch(fetchGames(gamesList));

  return null;
};

export default getGamesFromApi;
