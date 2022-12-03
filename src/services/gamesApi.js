/* eslint-disable camelcase */
import { fetchGames } from '../redux/games/games.reducer';
import { fetchCategories } from '../redux/categories/categories.reducer';

// Base URL
//const baseUrl = 'https://api.rawg.io/api/games?key=a053a797bc3f4e4e889c128317b22e13';

const gamesUrl = 'https://api.rawg.io/api/games?key=a053a797bc3f4e4e889c128317b22e13&page_size=5';

const categoryUrl = '';

// API Action for games
const getGamesFromApi = () => async (dispatch) => {
  const data = await fetch(gamesUrl);
  const response = await data.json();

  const gamesList = await response.results;

  dispatch(
    fetchGames(
      gamesList.map(({
        id, name, background_image,
      }) => ({
        id,
        gameName: name,
        image: background_image,
      })),
    ),
  );

  return null;
};

const getCategoriesFromApi = () => async (dispatch) => {
    const data = await fetch(categoryUrl);
    const response = await data.json();
  
    const categoriesList = await response.results;
  
    return null;
  };
  
  export { getGamesFromApi, getCategoriesFromApi };
