import React from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home-page/home-page';
import CategoriesPage from './pages/categories-page/categories-page';
import DetailsPage from './pages/details-page/details-page';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/game-details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
