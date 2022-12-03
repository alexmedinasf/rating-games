import React from 'react';
import CategoriesList from '../../components/categories-component/CategoriesList.component';

const stylesMarginFix = {
  marginTop: '2.5rem',
};

const CategoriesPage = () => (
  <section style={stylesMarginFix}>
    <h1>Categories Page</h1>
    <CategoriesList />
  </section>
);

export default CategoriesPage;
