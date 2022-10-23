import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map(actor => { 
          return (
              <div key={actors.indexOf(actor)}>
              <h3>{actor.name}</h3>
              <p>Movies:</p>
              <ul>
                {actor.movies.map(movie => <li key={actor.movies.indexOf(movie)}>{movie}</li>)}
              </ul>
            </div>)
        })}
    </div>
  )
}

export default Actors;
