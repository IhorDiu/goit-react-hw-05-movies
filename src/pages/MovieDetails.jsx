import { Suspense, useRef, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import {
  LinkDetails,
  LinkBack,
  AddInfo,
} from '../components/MovieDetailsCard/MovieDetailsCard.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Movies');

  useEffect(() => {
    const movieDetailsCards = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieDetailsCards();
  }, [movieId]);

  return (
    <div>
      <LinkBack to={backLinkLocationRef.current}> 🔙 Back to movies</LinkBack>

      <MovieDetailsCard movie={movie} />

      <h3>Additional information</h3>
      <AddInfo>
        <LinkDetails to="cast">Cast</LinkDetails>

        <LinkDetails to="crew">Crew</LinkDetails>

        <LinkDetails to="reviews">Reviews</LinkDetails>
      </AddInfo>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
