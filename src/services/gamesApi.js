/* eslint-disable camelcase */
import { fetchGames, fetchGamesDetails } from '../redux/games/games.reducer';

const apiKey = '?key=a053a797bc3f4e4e889c128317b22e13';

// Base URL
const gamesUrl = 'https://api.rawg.io/api/games?key=a053a797bc3f4e4e889c128317b22e13&page_size=18';

// Games Details URL
const gameDetailsUrl = 'https://api.rawg.io/api/games/';

// API Action for games
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(gamesUrl);
  const response = await data.json();

  const gamesList = await response.results;

  dispatch(
    fetchGames(
      gamesList.map(({
        id, name, rating, background_image,
      }) => ({
        id,
        gameName: name,
        rating,
        gameImage: background_image,
      })),
    ),
  );

  return null;
};

const getGameDetailsFromApi = (id) => async (dispatch) => {
    const gameUrl = `${gameDetailsUrl}${id}${apiKey}`;
     const data = await fetch(gameUrl);
     const response = await data.json();
  
     const gameDetails = await response;

  dispatch(fetchGamesDetails(gameDetails));

  return null;
};
    
    export { getGamesFromApi, getGameDetailsFromApi };
