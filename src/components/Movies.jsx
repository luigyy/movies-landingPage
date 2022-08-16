import React from "react";
import Movie from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <div>
      <h1>
        {movies.map((item) => (
          <Movie movie={item} />
        ))}
      </h1>
    </div>
  );
};

export default Movies;
