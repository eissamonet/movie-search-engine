import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouritesComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div class="image-container flex flex-col items-center">
                    <img src={movie.Poster} alt ='movie'></img>
                    <div class="overlay flex flex-col items-center justify-items-center"></div>
                        <FavouriteComponent />
                </div>
            ))}
        </>
    );
};

export default MovieList;