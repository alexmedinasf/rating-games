import React from 'react';
import { useSelector } from 'react-redux';
import CategoryBlock from '../categories-block-component/CategoriesBlock.component';

const CategoriesList = () => {
    const categories = useSelector((state) => state.categories.gameCategories);
  
    return (
      <section className="category-list-container">
        <h3>Categories</h3>
        {categories.map((category) => (
          <CategoryBlock title={category.categoryName} image={category.image} key={category.id} />
        ))}
      </section>
    );
  };
  
  export default CategoriesList;
