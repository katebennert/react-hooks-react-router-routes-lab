import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
              <div key={movies.indexOf(movie)}>
              <h3>{movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map(genre => <li key={movie.genres.indexOf(genre)}>{genre}</li>)}
              </ul>
            </div>)
        })}
    </div>
  )
}

export default Movies;
