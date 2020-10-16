import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovie] = useState({ status: "idle", data: null });

  const search = async () => {
    console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
    setMovie({ status: "searching...", data: null });
    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://omdbapi.com/?apikey=2344c2a6&s=${queryParam}`
    );
    setMovie({ status: "done", data: response.data.Search });

    console.log("Success!", response.data.Search);
  };

  if (movies.data === null) {
    return (
      <div>
        <h1>Discover some movies!</h1>
        <p>{movies.status}</p>
        <p>
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Discover some movies!</h1>
        <p>{movies.status}</p>
        <p>
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </p>
        <div>
          {" "}
          <div>
            {movies.data.map((movie) => {
              // movie.key = movie.imdbID;
              console.log(movie);
              return (
                <div>
                  <Link to={`/movies/${movie.imdbID}`}>
                    <h3>{movie.Title}</h3>
                  </Link>
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
