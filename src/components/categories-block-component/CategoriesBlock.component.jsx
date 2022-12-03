import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/category-block.styles.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const CategoryBlock = (props) => {
  const { title, image, totalGames } = props;

  return (
    <section className="category-container">
      <img src={image} alt="Category visual description" className="image-container" />

<FaRegArrowAltCircleRight className="arrow-top" />
      <h2 className="category-title">{title}</h2>
      <p className="games-counter">{totalGames}</p>
    </section>
  );
};

CategoryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  totalGames: PropTypes.number.isRequired,
};

export default CategoryBlock;
