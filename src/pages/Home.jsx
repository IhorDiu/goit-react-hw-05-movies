import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMoviesList = async () => {
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    trendingMoviesList();
  }, []);

  //  const currentDate = new Date().toLocaleDateString();

  return (
    <main>
      <h1>Trending on today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;


/* <div class="card style_1">
  <div class="image">
    <div class="wrapper">
      <a class="image" href="/movie/76600" title="Аватар:  Шлях води">
              <img loading="lazy" class="poster" src="/t/p/w220_and_h330_face/98wN9Pc1paxu8V5iBzg9Ap8ghkQ.jpg" srcset="/t/p/w220_and_h330_face/98wN9Pc1paxu8V5iBzg9Ap8ghkQ.jpg 1x, /t/p/w440_and_h660_face/98wN9Pc1paxu8V5iBzg9Ap8ghkQ.jpg 2x" alt="">

      </a>
    </div>
    <div class="options" data-id="76600" data-object-id="4e9de7a65e73d65e02000328" data-media-type="movie" data-role="tooltip">
      <a class="no_click" href="#"><div class="glyphicons_v2 circle-more white"></div></a>
    </div>
  </div>
  <div class="content">
    <div class="consensus tight">
      <div class="outer_ring">
        <div class="user_score_chart 4e9de7a65e73d65e02000328" data-percent="77.44" data-track-color="#204529" data-bar-color="#21d07a">
          <div class="percent">
              <span class="icon icon-r77"></span>
          </div>
        <canvas height="51" width="51" style="height: 34px; width: 34px;"></canvas></div>
      </div>
    </div>

    <h2><a href="/movie/76600" title="Аватар:  Шлях води">Аватар:  Шлях води</a></h2>
    <p>14 груд. 2022</p>
  </div>

  <div class="hover 76600"></div>
</div> */