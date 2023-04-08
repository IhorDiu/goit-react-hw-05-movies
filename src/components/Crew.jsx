import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import { Container } from './MoviesList/MoviesList.styled';
import { CardWrapper, AddInfo } from './MoviesCard/MoviesCard.styled';
import no_photo from '../Images/coming_soon.jpg';

const Cast = () => {
  const [crew, setCrew] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCrew(data.crew);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      <h3>Crew</h3>
      <Container>
        {crew.map(({ id, profile_path, name, popularity }) => (
          <CardWrapper key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : no_photo
              }
              alt="{name}"
              width={100}
            />
            <AddInfo>{name}</AddInfo>

            <AddInfo>Popularity: {popularity}</AddInfo>
          </CardWrapper>
        ))}
      </Container>
    </>
  );
};

export default Cast;
