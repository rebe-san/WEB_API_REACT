import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../App.css";

class MovieCardList extends Component {
  // constructor
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      movies: []
    };
  }

  //Once component has been mount
  componentDidMount() {
    axios

      // GET is used to request data from a specified resource.
      .get("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        this.setState({
          //reciving books from DB -updating state
          movies: res.data
        });
      })
      .catch(err => {
        console.log("Error from Movies List");
      });
  }

  // render method
  render() {
    return <MovieCard movies={this.state.movies} />;
  }
}

export default MovieCardList;
