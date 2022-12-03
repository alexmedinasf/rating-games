import React from 'react';
import { useSelector } from 'react-redux';
import CategoryBlock from '../categories-block-component/CategoriesBlock.component';
import '../../styles/category-list.styles.css';

const CategoriesList = () => {
    const categories = useSelector((state) => state.categories.gameCategories);
  
    return (
        <section className="category-list">
        <h3 className="category-list-title">GAMES BY CATEGORY</h3>
        <div className="category-list-container">
          {categories.map((category) => (
            <CategoryBlock
              title={category.categoryName}
              image={category.image}
              totalGames={category.totalGames}
              key={category.id}
            />
          ))}
        </div>
      </section>
    );
  };

  export default CategoriesList;
