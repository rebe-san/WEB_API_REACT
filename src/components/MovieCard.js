import React from "react";
import "../App.css";

//funtional component with props
const MovieCard = ({ movies }) => {
  return (
    <section id="container-cards">
      {movies.map(movie => (
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Title:{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Release Date :{movie.release_date}</p>
            <p class="card-text">Description: {movie.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovieCard;
