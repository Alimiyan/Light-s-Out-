import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=5df6029d07decb811e8974efbac39fc1&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false";
//https://www.omdbapi.com?apikey=9454f5d3

const imageUrl = "https://image.tmdb.org/t/p/original";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Light's Out! </h1>
      <div className="search">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for Movies" />
        <img src={SearchIcon} alt="search" onClick={()=>{
          searchMovies(search)
        }}/>
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return (
               <MovieCard movie={movie} imageUrl={imageUrl} />
            )
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
