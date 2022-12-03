import React from 'react';
import { useSelector } from 'react-redux';
import GameBlock from '../game-block-component/GameBlock.component';
import '../../styles/game-list.styles.css';

const GamesList = () => {
    const games = useSelector((state) => state.games.gamesList);

  return (
    <section className="game-list-container">
      {games.map((game) => (
        <GameBlock
        title={game.gameName}
        rating={game.rating}
        gameImage={game.gameImage}
        id={game.id}
        key={game.id}
      />
      ))}
    </section>
  );
};

export default GamesList;
