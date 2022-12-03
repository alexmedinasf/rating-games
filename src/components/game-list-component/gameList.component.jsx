import React from 'react';
import { useSelector } from 'react-redux';
import GameBlock from '../game-block-component/GameBlock.component';

const GamesList = () => {
    const games = useSelector((state) => state.games.gamesList);

  return (
    <section className="game-list-container">
        <h3>Games</h3>
      {games.map((game) => (
        <GameBlock title={game.gameName} rating={game.rating} key={game.id} />
      ))}
    </section>
  );
};

export default GamesList;
