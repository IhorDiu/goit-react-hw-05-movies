import { useLocation, Link } from 'react-router-dom';

const urlTmdb = 'https://image.tmdb.org/t/p/w400';

const MoviesHomeItem = ({
  id,
  title,
  backdrop_path,
  vote_average,
  release_date,
}) => {
  const releaseData = new Date(release_date);

  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <div>
          <img src={urlTmdb + backdrop_path} alt={title} />
          <h3>{title}</h3>
          {/* <p>{genre}</p> */}
          <p>Vote average: {vote_average}</p>
          <p>Release date: {releaseData.toLocaleDateString()}</p>
        </div>
      </Link>
    </li>
  );
};

export default MoviesHomeItem;

//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     const genreList = async () => {
//       try {
//         const data = await getMovieGenre();
//         setGenres(data.genres);
//         // console.log(data.genres);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     genreList();

//   }, []);
//   console.log(genre_ids);
//   console.log(genres);

//   for (var i = 0; i < tempDates.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if(tempDates.length == arr.length) {
//             return true;
//         } else if (tempDates.length !== arr.length) {
//             if(tempDates[i] !== arr[j]){
//                 tempDates.push(j);
//             }
//         }
//     }
