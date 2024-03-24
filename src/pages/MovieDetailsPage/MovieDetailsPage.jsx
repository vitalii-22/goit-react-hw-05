import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesById } from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const { results } = await requestMoviesById(movieId);
        setMovie(results);
        console.log(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {movie !== null && (
        <div>
          <img src="" alt="" />
          <h1>{movie.original_title}</h1>
          <p>Overview {movie.overview}</p>
          <h3>Genres</h3>
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
      )}
    </div>
  );
};

export default MovieDetailsPage;
