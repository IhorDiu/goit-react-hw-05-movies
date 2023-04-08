import MoviesCard from 'components/MoviesCard/MoviesCard';

const MoviesList = ({ movies}) => {
  return (
    <ul>
      {movies.map(
        ({ id, title, backdrop_path, vote_average, release_date }) => (
          <MoviesCard
            key={id}
            id={id}
            title={title}
            backdrop_path={backdrop_path}
            vote_average={vote_average}
            release_date={release_date}
          />
        )
      )}
    </ul>
  );
};

export default MoviesList;

