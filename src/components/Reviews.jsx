import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import no_photo from '../Images/coming_soon.jpg';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const movieReviews = async () => {
      setLoading(true);
      try {
        const data = await getMovieReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <div>Loading...</div>}
      <h2>Reviews</h2>
      {!loading && reviews.length === 0 && (
        <h3>We don't have any reviews for this movie.</h3>
      )}
      <ul>
        {reviews.map(
          ({ author_details: { username, avatar_path }, content, id }) => (
            <li key={id}>
              <img
                src={
                  avatar_path
                    ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                    : no_photo
                }
                alt="{name}"
                width={100}
              />
              <h3>{username}</h3>
              -------------------------------------------------------
              <p>{content}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Reviews;
