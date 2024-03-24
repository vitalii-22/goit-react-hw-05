import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
// import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import { requestMoviesByQuery } from '../../services/api';

// const notify = () =>
//   toast('Please enter a search parameter!', {
//     style: {
//       borderRadius: '50px',
//       background: '#333',
//       color: '#fff',
//     },
//   });

const MoviesPage = () => {
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState(null);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    if (form.elements.search.value.trim() === '') {
      alert('pless');
      // notify();
    }

    setQuery(form.elements.search.value.toLowerCase());

    form.reset();
  };

  useEffect(() => {
    if (query === null) return;

    async function getMovie() {
      try {
        setIsLoading(true);
        const { results } = await requestMoviesByQuery(query);
        setMovies(results);
        console.log(results);
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
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.formInput}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button className={css.formButton} type="submit">
          Search
        </button>
      </form>
      {/* <Toaster /> */}

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
