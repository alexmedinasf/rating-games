import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GameBlock from '../game-block-component/gameBlock.component';
import '../../styles/game-list.styles.css';

const GamesList = ({ handleFilter }) => {
    const allGames = useSelector((state) => state.games.gamesList);
    const filterInput = useRef();
  
    const [filtered, setFiltered] = useState(21);

  const returnFilterData = (allGames, minRate) => {
    const filteredGames = handleFilter(allGames, minRate);
    setFiltered(filteredGames);
  };

  return (
    <>
      <div className="filter-container">
        <p className="filter-des">Filter games by rating</p>
        <select
          className="filter-selector"
          ref={filterInput}
          onChange={() => returnFilterData(allGames, filterInput.current.value)}
        >
          <option value="All Games">All Games</option>
          <option value="4">4-5</option>
          <option value="3">3-4</option>
          <option value="2">2-3</option>
          <option value="1">1-2</option>
          <option value="0">0-1</option>
        </select>
      </div>

      <section className="game-list-container">
      {(filtered !== 21) ? (
          filtered.map((game) => (
            <GameBlock
              title={game.gameName}
              rating={game.rating}
              gameImage={game.gameImage}
              id={game.id}
              key={game.id}
            />
          ))
        ) : (
          allGames.map((game) => (
            <GameBlock
              title={game.gameName}
              rating={game.rating}
              gameImage={game.gameImage}
              id={game.id}
              key={game.id}
            />
          ))
        )}
      </section>
    </>

  );
};

GamesList.propTypes = {
    handleFilter: PropTypes.func.isRequired,
  };

export default GamesList;
