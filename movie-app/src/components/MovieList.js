import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div class="flex justify-center">
                    <img src={movie.Poster} alt ='movie'></img>
                </div>
            ))}
        </>
    );
};

export default MovieList;