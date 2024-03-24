import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies !== null &&
        Array.isArray(movies) &&
        movies.map(movie => {
          return (
            <li className={css.moviesItem} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title}
                {movie.original_name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
