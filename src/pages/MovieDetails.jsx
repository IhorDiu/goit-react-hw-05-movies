import { Suspense, useRef } from "react";
import { Outlet, Link, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/Movies");

  return (
    <div>
       <Link to={backLinkLocationRef.current}>Back to products</Link>
      <h3>Additional information</h3>

      <ul>
        <li> <Link to="cast">Cast</Link></li>
        <li> <Link to="reviews">Reviews</Link></li>
      </ul> 
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
