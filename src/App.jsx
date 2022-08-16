import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import "./index.css"

const API_KEY = "bbeb366a";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchChange = (value) => {
    setSearch(value)
  }

  const searchMovies = async (title) => {
    setLoading(true)
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search.length > 0 ? data.Search: []);
    console.log(data.search)
    setSearch("");
    setLoading(false) 
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <Header searchValue={search} searchMovies={searchMovies} onSearchChange={onSearchChange} />
       { movies.length > 0 ? loading ? (<h1>loading </h1>) : (<Movies movies={movies}/> ): (<div> <h1>No movies found</h1></div> )}
    </div>
  );
}

export default App;
