import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieHeading from './components/MovieHeading';
import AddFavourites from './components/AddFavourites';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=54faae10`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);


  return (
    <div class= 'container mx-auto movie-app'>
      <div class='grid'>
        <MovieHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div class='grid space-x-4'>
        <MovieList movies={movies} favouritesComponent={AddFavourites} />
      </div>
    </div>

  );
};
export default App;
