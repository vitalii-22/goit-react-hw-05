import axios from 'axios';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGIzN2M1ZGZkMzM1YzIzMTE0MzE0MTM2YzQ3YWYyMiIsInN1YiI6IjY1ZmZlZjJhNzcwNzAwMDE3YzBkYTlhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.en9D-lK2J3eY46sTE3LD0bYfZqHmBwv9mMb4Z3xP5DI';

const options = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const requestMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data;
};

export const requestMoviesByQuery = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};

export const requestMoviesById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return data;
};

export const requestMoviesCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&page=1`,
    options
  );
  return data;
};

export const requestMoviesReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

//
