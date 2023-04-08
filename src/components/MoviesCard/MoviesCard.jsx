import { useLocation, Link } from 'react-router-dom';
import no_photo from '../../Images/no_poster.jpg';
import { CardWrapper, MovieName, AddInfo } from "./MoviesCard.styled";

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
    <CardWrapper key={id}>
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
          <MovieName>{title}</MovieName>
          {/* <p>{genre}</p> */}
          <AddInfo>Rating: {vote_average.toFixed(1)}/10</AddInfo>
          <AddInfo>Release year: {releaseData.getFullYear()}</AddInfo>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default MoviesCard;

