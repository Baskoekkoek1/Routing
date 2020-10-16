import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Home{" "}
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        About{" "}
      </NavLink>
      <NavLink
        to="/discover"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Discover Movies{" "}
      </NavLink>
    </div>
  );
}
