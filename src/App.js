import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import HomePage from './pages/home-page/home-page';
import DetailsPage from './pages/details-page/details-page';
import { getGamesFromApi } from './services/gamesApi';

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
