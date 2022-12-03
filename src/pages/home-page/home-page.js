import React from 'react';
import { useSelector } from 'react-redux';
import GamesList from '../../components/game-list-component/gameList.component';
import mainBackgroundImage from '../../assets/images/main-background-image.webp';
import '../../styles/homepage.styles.css';

const HomePage = () => {
    const games = useSelector((state) => state.games.gamesList);
    const amountOfGames = games.length;
  
    return (
      <section className="homepage-container">
        <img src={mainBackgroundImage} alt="space background" />
        <h1>Check out this games</h1>
        <p>
          Showing
          {' '}
          {amountOfGames}
          {' '}
          results
        </p>
        <GamesList className="game-list-container" />
      </section>
    );
  };
  
  export default HomePage;
