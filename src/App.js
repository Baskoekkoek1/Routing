import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/Homepage";

function Discover() {
  return <h1>Discover</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
