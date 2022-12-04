import './App.css';
import { HomePage } from './Webapp/HomePage.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './Webapp/AppLayout';
import MovieInfo from './Webapp/Movies/MovieInfo';
import { Footer } from './Webapp/Footer';
import PopularMovies from './Webapp/Movies/PopularMovies';
import NowPlayingMovies from './Webapp/Movies/NowPlayingMovies';
import TopRatedMovies from './Webapp/Movies/TopRatedMovies';
import UpcomingMovies from './Webapp/Movies/UpcomingMovies';
import PopularTV from './Webapp/TV/PopularTV';
import AiringTV from './Webapp/TV/AiringTV';
import OnTV from './Webapp/TV/OnTV';
import TopRatedTV from './Webapp/TV/TopRatedTV';
import { MultiSearchResults } from './Webapp/MultiSearchResults';
import TVInfo from './Webapp/TV/TVInfo';
import PopularPeople from './Webapp/People/PopularPeople';
function App() {
  return (
    <div>
      <BrowserRouter>
      <AppLayout/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' exact element={<HomePage />} />
          <Route path='/movies/popular' exact element={<PopularMovies/>} />
          <Route path='/movies/nowplaying' exact element={<NowPlayingMovies/>} />
          <Route path='/movies/upcoming' exact element={<UpcomingMovies/>} />
          <Route path='/movies/toprated' exact element={<TopRatedMovies/>} />
          <Route path='/movies/:movieId' exact element={<MovieInfo />} />
          <Route path='/tv/:tvId' exact element={<TVInfo/>} />
          <Route path='/tvshows/popular' exact element={<PopularTV />} />
          <Route path='/tvshows/airingtoday' exact element={<AiringTV />} />
          <Route path='/tvshows/ontv' exact element={<OnTV />} />
          <Route path='/tvshows/toprated' exact element={<TopRatedTV/>} />
          <Route path='/search/multi/:words' exact element={<MultiSearchResults/>} />
          <Route path='/person/popular' exact element={<PopularPeople/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
