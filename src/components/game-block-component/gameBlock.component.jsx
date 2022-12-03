import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../../styles/game-block.styles.css';

const GameBlock = (props) => {
    const {
        title, rating, gameImage, id,
      } = props;

  // const dispatch = useDispatch();

  return (
    <section className="game-container">
      <Link to="/game-details" className="game-link-a">
        <img src={gameImage} alt="Category visual description" className="game-image" />
        <FaRegArrowAltCircleRight className="arrow-top" />
        <h4 className="game-title" id={id}>{title}</h4>
        <p className="game-rating">
          {rating}
          /5
        </p>
      </Link>
    </section>
  );
};

GameBlock.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  gameImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GameBlock;
