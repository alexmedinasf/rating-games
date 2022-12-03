import React from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import HomePage from './pages/home-page/home-page';
import DetailsPage from './pages/details-page/details-page';
// import getGamesFromApi from './services/gamesApi';
// import getCategoriesFromApi from './services/categoryApi';
import './styles/app.css';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategoriesFromApi());
  //   dispatch(getGamesFromApi());
  // }, []);

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
