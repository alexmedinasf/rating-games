import React from 'react';
import PropTypes from 'prop-types';

const GameBlock = (props) => {
  const { title, image } = props;


  return (
    <section className="game-container">
      <div className="image-container">
        <img src={image} alt="Picture of a game" />
      </div>

      <h2 className="game-title">{title}</h2>
    </section>
  );
};

GameBlock.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GameBlock;
