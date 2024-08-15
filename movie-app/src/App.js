import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';


const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "imdbID": "tt1201607",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },
  {
      "Title": "Harry Potter and the Sorcerer's Stone",
      "Year": "2001",
      "imdbID": "tt0241527",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
  },
  {
      "Title": "Harry Potter and the Prisoner of Azkaban",
      "Year": "2004",
      "imdbID": "tt0304141",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
  },

  ]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=54faae10"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
export default App;
