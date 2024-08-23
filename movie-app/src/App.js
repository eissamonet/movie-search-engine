import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import MovieList from './components/MovieList';


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
    <div className= "container mx-auto px-4 movie-app">
      <div className="flex-row">
      <div className="flex-row">
        <MovieList movies={movies} />
      </div>
      </div>
    </div>
  );
};
export default App;
