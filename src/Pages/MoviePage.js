import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log({ route_parameters });

  const [movieData, set_movieData] = useState({ status: "idle", data: null });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${route_parameters.imdbID}&apikey=2344c2a6`
      );
      console.log("RESPONSE:", response);
      set_movieData({ status: "done", data: response.data });
    }
    fetchData();
  }, [route_parameters.imdbID]);

  console.log("Data of a movie:", movieData.data);

  return (
    <div>
      <h1>
        {movieData.data?.Title} ({movieData.data?.Year})
      </h1>
      <img src={movieData.data?.Poster} alt="movie poster" />
      <p style={{ fontWeight: "bold" }}>Director: {movieData.data?.Director}</p>
      <p>{movieData.data?.Plot}</p>
    </div>
  );
}
