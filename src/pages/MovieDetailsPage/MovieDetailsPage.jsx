import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { requestMoviesById } from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';
import MovieCast from '../../components/MovieCast/MovieCast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const results = await requestMoviesById(movieId);
        setMovie(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <div>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        {movie !== null && (
          <div className={css.movieWrapper}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie.original_title"
            />

            <div className={css.informWrapper}>
              <h1>{movie.original_title}</h1>
              <div>
                <h3>Overview: </h3>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h3>Genres:</h3>
                <ul>
                  {movie.genres.map(genre => {
                    return (
                      <li key={genre.id}>
                        <h4>{genre.name}</h4>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
      </Routes>

      {/* <Link to={`/movies/${movie.id}`}>
        <MovieCast />
      </Link> */}
    </>
  );
};

export default MovieDetailsPage;
