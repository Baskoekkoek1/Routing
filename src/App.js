import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar/NavBar";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/Homepage";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={Homepage} />
        <Route path="/movie/:imdbID" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
