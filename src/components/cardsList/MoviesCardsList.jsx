import MoviesCard from "../cards/MoviesCard";
import { useState, useEffect } from "react";
import axios from "axios";
const backEndUrl = import.meta.env.VITE_BACKEND_URL + "/movies";

export default function MoviesCardsList() {
  const [movies, setMovies] = useState([]);
  const [error, SetError] = useState("");

  const FetchMovies = () => {
    axios
      .get(`${backEndUrl}`)
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => {
        SetError(err);
      });
  };

  useEffect(FetchMovies, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-4">
              <MoviesCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
