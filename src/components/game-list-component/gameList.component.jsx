import React from 'react';
import { useSelector } from 'react-redux';
import GameBlock from '../game-block-component/gameBlock.component';

const GamesList = () => {
  const games = useSelector((state) => state.games);

  return (
    <section className="game-list-container">
      {games.map((game) => (
        <GameBlock title={game.title} img={game.img} />
      ))}
    </section>
  );
};

export default GamesList;
