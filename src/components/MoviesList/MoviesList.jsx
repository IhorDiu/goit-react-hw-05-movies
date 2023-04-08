import MoviesCard from 'components/MoviesCard/MoviesCard';
import { Container } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    
      <Container>
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
      </Container>
   
  );
};

export default MoviesList;
