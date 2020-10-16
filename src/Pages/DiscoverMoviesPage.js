import React, { useState } from "react";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const search = () => {
    console.log("TODO search movies for:", searchText);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}
