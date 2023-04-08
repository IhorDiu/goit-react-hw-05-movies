import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      <h3>Actors</h3>
      <ul>
        {cast.map(({ id, profile_path, name, character, popularity }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt="{name}"
              width={100}
            />
            <p>{name}</p>
            <p>Character: {character} </p>
            <p>Popularity: {popularity}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
