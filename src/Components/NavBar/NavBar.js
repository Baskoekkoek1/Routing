import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AboutPage">About</NavLink>
      <NavLink to="/DiscoverMoviesPage">Discover Movies</NavLink>
    </div>
  );
}
