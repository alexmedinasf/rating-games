import React from 'react';
import { useSelector } from 'react-redux';

const GameDetails = () => {
    const game = useSelector((state) => state.games.gameDetails);
  console.log(game);

  return (
    <section className="game-details-container">
      <img src="" alt="game visual description" />
      <h1>Game Details</h1>
    </section>
  );
};

export default GameDetails;
