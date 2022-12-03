import React from 'react';
import PropTypes from 'prop-types';

const CategoryBlock = (props) => {
  const { title, image } = props;

  return (
    <section className="category-container">
      <div className="image-container">
        <img src={image} alt="Category visual description" />
      </div>
      <h2 className="category-title">{title}</h2>
    </section>
  );
};

CategoryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryBlock;
