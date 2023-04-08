import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

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
      <ul>
        {crew.map(({ id, profile_path, name, popularity }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt="{name}"
              width={100}
            />
            <p>{name}</p>

            <p>Popularity: {popularity}</p>
          </li>
        ))}
      </ul>
    </>

 
  );
};

export default Cast;

