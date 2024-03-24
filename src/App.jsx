// import { useState } from 'react'
// import { lazy } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage'));

function App() {
  return (
    <>
      <Navigation>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
