import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(
          ({ author_details: { username, avatar_path }, content, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
                alt="{name}"
                width={100}
              />
              <p>{username}</p>
              <p>{content}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Reviews;
