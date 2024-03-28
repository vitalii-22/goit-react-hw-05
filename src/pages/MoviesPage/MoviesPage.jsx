import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { requestMoviesByQuery } from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {
  // const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState(null);
  const query = searchParams.get('query');
  const location = useLocation();

  const fetchQuery = valueSearch => {
    setSearchParams({ query: valueSearch });
  };

  useEffect(() => {
    if (query === null) return;

    async function getMovie() {
      try {
        setIsLoading(true);
        const { results } = await requestMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={fetchQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      <MovieList location={location} movies={movies} />
    </>
  );
};

export default MoviesPage;
