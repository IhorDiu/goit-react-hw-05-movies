import { Suspense, useRef, useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

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
      <Link to={backLinkLocationRef.current}>Back to products</Link>

      <MovieDetailsCard movie={movie} />

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
