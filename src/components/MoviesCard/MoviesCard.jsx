import { useLocation, Link } from 'react-router-dom';
import no_photo from '../../Images/no_poster.jpg';

const MoviesCard = ({
  id,
  title,
  backdrop_path,
  vote_average,
  release_date,
  // poster_path,
}) => {
  const location = useLocation();
  const releaseData = new Date(release_date);

  return (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <img
            width="400"
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
                : no_photo
            }
            alt={title}
          />
          <h3>{title}</h3>
          {/* <p>{genre}</p> */}
          <p>Rating: {vote_average.toFixed(1)}/10</p>
          <p>Release year: {releaseData.getFullYear()}</p>
        </div>
      </Link>
    </li>
  );
};

export default MoviesCard;

