import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home-page/home-page';
import DetailsPage from './pages/details-page/details-page';
import getGamesFromApi from './services/gamesApi';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesFromApi());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
