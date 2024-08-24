import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieHeading from './components/MovieHeading';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=marvel&apikey=54faae10"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <div class= 'container mx-auto movie-app'>
      <div class='grid'>
        <MovieHeading heading='Movies' />
        <SearchBox />
      </div>
      <div class='grid space-x-4'>
        <MovieList movies={movies} />
      </div>
    </div>

  );
};
export default App;
