import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GamesList from '../../components/game-list-component/gameList.component';
import mainBackgroundImage from '../../assets/images/main-background-image.webp';
import filterData from '../../utils/filter';
import '../../styles/homepage.styles.css';

const HomePage = () => {
  const games = useSelector((state) => state.games.gamesList);
  const amountOfGames = games.length;

  const [count, setCount] = useState(773625);

  const handleFilter = (allGames, minRate) => {
    const filteredGames = filterData(allGames, minRate);
    setCount(filteredGames.length);
    return filteredGames;
  };

  return (
    <section className="homepage-container">
      <img src={mainBackgroundImage} alt="space background" />
      <h1>Check out this games</h1>
      {(count !== 773625) ? (
        <p>
          Showing
            {' '}
            {count}
            {' '}
          results
        </p>
      ) : (
          <p>
          Showing
              {' '}
              {amountOfGames}
              {' '}
          results
        </p>
      )}
      <GamesList className="game-list-container" handleFilter={handleFilter} />
    </section>
  );
};

export default HomePage;
