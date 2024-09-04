import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieHeading from './components/MovieHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
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

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

    setFavourites(movieFavourites);
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };


  return (
    <div class= 'container mx-auto movie-app'>
      <div class='grid'>
        <MovieHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div class='grid space-x-4'>
        <MovieList
          movies={movies} handleFavouritesClick={addFavouriteMovie} favouritesComponent={AddFavourites} />
      </div>
      <div class='grid'>
        <MovieHeading heading='Favourites' />
      </div>
      <div class='grid space-x-4'>
        <MovieList
          movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouritesComponent={RemoveFavourites} />
      </div>
    </div>

  );
};
export default App;
