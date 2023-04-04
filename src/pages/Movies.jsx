import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5', 'movie-6'].map(
        movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {movie}
            </Link>
          );
        }
      )}
    </div>
  );
};
export default Movies;
