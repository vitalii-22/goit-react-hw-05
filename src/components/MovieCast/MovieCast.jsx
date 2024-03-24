import { useEffect, useState } from 'react';
import { requestMoviesCast } from '../../services/api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const results = await requestMoviesCast(movieId);
        setMovieCast(results);
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
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <h3>Cast</h3>
    </>
  );
};

export default MovieCast;
