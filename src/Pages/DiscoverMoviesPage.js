import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovie] = useState({ status: "idle", data: null });
  const history = useHistory();
  const params = useParams();

  console.log("What are", params);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    async function fetchData() {
      const queryParam = encodeURIComponent(params.searchtext);
      setMovie({ status: "searching...", data: null });
      const response = await axios.get(
        `https://omdbapi.com/?apikey=2344c2a6&s=${queryParam}`
      );
      console.log("RESPONSE:", response);
      console.log("TEXTSEARCH", searchText);
      if (response.data.Error === "Movie not found!") {
        setMovie({ status: "Oops, could not find your movie!", data: null });
      } else if (params.searchtext === undefined) {
        setMovie({ status: "idle", data: null });
      } else {
        setMovie({ status: "done", data: response.data.Search });
        set_searchText(params.searchtext);
      }

      console.log("Hello");
    }
    fetchData();
  }, [searchText, params.searchtext]);
  console.log("MOVIEDATA", movies.data);

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
          <Link to={`./${searchText}`}>
            <button onClick={navigateToSearch}>Search</button>
          </Link>
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
          <Link to={`./${searchText}`}>
            <button onClick={navigateToSearch}>Search</button>
          </Link>
        </p>
        <div>
          {" "}
          <div>
            {movies.data.map((movie) => {
              console.log(movie.imdbID);
              return (
                <div key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>
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
