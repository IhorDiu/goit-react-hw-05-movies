import no_photo from 'Images/no_poster.jpg';
import { Section, MovieInfo, GenresList, GenresItem  } from './MovieDetailsCard.styled';

const MovieDetailsCard = ({
  movie: { release_date, title, vote_average, overview, genres, poster_path },
}) => {
  const releaseData = new Date(release_date);

  return (
    <Section>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : no_photo
        }
        alt="{title}"
        min-width={'100px'}
      />
      <MovieInfo>
        <h2>{title}</h2>
        <p>Release date: {releaseData.toLocaleDateString()}</p>
        <h4>Rating: <span>{vote_average}/10</span></h4>
        <h4>Genres:</h4>
        <GenresList>
          {genres?.map(item => (
            <GenresItem key={item.id}>| {item.name} |</GenresItem>
          ))}
        </GenresList>
        <h4>Overview:</h4>
        <p>{overview}</p>
      </MovieInfo>
    </Section>
  );
};

export default MovieDetailsCard;
