import no_photo from 'Images/no_poster.jpg';

const MovieDetailsCard = ({
  movie: { release_date, title, vote_average, overview, genres, poster_path },
}) => {
  const releaseData = new Date(release_date);
  console.log(genres);
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : no_photo
        }
       
        alt="{title}"
        min-width={'100px'}
      />
      <h2>{title}</h2>
      <p>Release date: {releaseData.toLocaleDateString()}</p>
      <p>Rating: {vote_average}/10</p>
      <ul>
        {genres?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <p>Overview: {overview}</p>
    </div>
  );
};

export default MovieDetailsCard;
