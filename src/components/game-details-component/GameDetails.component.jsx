import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import '../../styles/game-details.styles.css';

const GameDetails = () => {
    const game = useSelector((state) => state.games.gameDetails);

    const { developers } = game;

  return (
    <section className="game-details-container">
      <div className="image-arrow-container">
        <Link
          to="/"
          className="details-link-a"
        >
          <FaRegArrowAltCircleLeft className="back-arrow" />
        </Link>
        <img src={game.background_image} alt="game visual description" />
      </div>
      <h3>{game.name}</h3>
      <article className="info-container">
        <div className="rates-container">
          <p>
            Overal Rating
            {' '}
            {game.rating}
            /5
          </p>
          <p>
            Metacritic Rating
            {' '}
            {game.metacritic}
            /100
          </p>
        </div>

        <div className="game-details">
          <p>
            Released:
            {' '}
            {game.released}
          </p>

          <div>
            Developers:
            {' '}
            {developers.map((developer) => (
              `<p>${developer.name}<p/>`
            ))}
          </div>

        </div>
      </article>

      <p className="main-description">{game.description_raw}</p>
    </section>
  );
};

export default GameDetails;
