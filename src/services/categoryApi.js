/* eslint-disable camelcase */
import { fetchCategories } from '../redux/categories/categories.reducer';

// Base URL
const categoryUrl = 'https://api.rawg.io/api/genres?key=a053a797bc3f4e4e889c128317b22e13&page_size=8';

// API Action for categories
const getCategoriesFromApi = () => async (dispatch) => {
  const data = await fetch(categoryUrl);
  const response = await data.json();

  const categoriesList = await response.results;

  dispatch(
    fetchCategories(
      categoriesList.map(({
        id, name, image_background, games_count,
      }) => ({
        id,
        categoryName: name,
        image: image_background,
        totalGames: games_count,
      })),
    ),
  );

  return null;
};

export default getCategoriesFromApi;
