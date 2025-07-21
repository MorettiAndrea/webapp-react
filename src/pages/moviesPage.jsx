import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/cards/movieCard";

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL + "/movies";
  const fetchApi = () =>
    axios
      .get(backendUrl)
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => {
        alert("errore" + err);
      });
  useEffect(() => {
    fetchApi();
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <div className="container">
            <h1 className="my-3 text-center">Movie List</h1>
            <div className="row">
              {movies.map((movie) => (
                <div className="col-4">
                  <MovieCard key={movie.id} Movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
