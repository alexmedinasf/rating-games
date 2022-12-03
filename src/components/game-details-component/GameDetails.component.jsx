import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import '../../styles/game-details.styles.css';

const GameDetails = (props) => {
  const {
    gameName,
    gameImage,
    gameRating,
    gameMeta,
    gameReleased,
    gameDes,
    gameTime,
  } = props;

  return (
    <section className="game-details-container">
      <div className="image-arrow-container">
        <Link
          to="/"
          className="details-link-a"
        >
          <FaRegArrowAltCircleLeft className="back-arrow" />
        </Link>
        <img src={gameImage} alt="game visual description" />
      </div>
      <h3>{gameName}</h3>
      <article className="info-container">
        <div className="rates-container">
          <p>
            Overal Rating
            {' '}
            {gameRating}
            /5
          </p>
          <p>
            Metacritic Rating
            {' '}
            {gameMeta}
            /100
          </p>
        </div>

        <div className="game-details">
          <p>
            Released:
            {' '}
            {gameReleased}
          </p>

          <p>
            Playtime:
            {' '}
            {gameTime}
          </p>

        </div>
      </article>

      <p className="main-description">{gameDes}</p>

    </section>
  );
};

GameDetails.propTypes = {
  gameName: PropTypes.string.isRequired,
  gameImage: PropTypes.string.isRequired,
  gameDes: PropTypes.string.isRequired,
  gameReleased: PropTypes.string.isRequired,
  gameRating: PropTypes.number.isRequired,
  gameMeta: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
};

export default GameDetails;
