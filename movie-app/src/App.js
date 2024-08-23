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
    const url = "http://www.omdbapi.com/?s=avengers&apikey=54faae10"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <div class= "container mx-auto px-4 movie-app">
      <div class="flex-row">
        <MovieHeading heading="Movies" />
        <SearchBox />
      <div class="flex-row">
        <MovieList movies={movies} />
      </div>
      </div>
    </div>
  );
};
export default App;
