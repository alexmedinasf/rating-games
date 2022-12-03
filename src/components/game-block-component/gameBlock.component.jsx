import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const GameBlock = (props) => {
  const { title, rating } = props;

  // const dispatch = useDispatch();

  return (
    <section className="game-container">
      <h4 className="game-title">{title}</h4>
      <p className="game-rating">{rating}</p>
    </section>
  );
};

GameBlock.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default GameBlock;
