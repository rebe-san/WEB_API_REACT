import React, { Component } from "react";
import MovieCardList from "./components/MovieCardList";
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Movies from </h1>
          <img alt="ghibli-logo" src={logo} />
        </header>
        <main>
          <MovieCardList />
        </main>
      </div>
    );
  }
}

export default App;
