import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.moviesList}>
      {movies !== null &&
        Array.isArray(movies) &&
        movies.map(movie => {
          return (
            <li className={css.moviesItem} key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
