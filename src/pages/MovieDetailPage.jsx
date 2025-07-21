import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCardForDetail from "../components/cards/movieCardForDetail";
import ReviewCard from "../components/cards/reviewCard";

export default function MovieDetailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState();
  const [movieReviews, setMovieReviews] = useState();
  const backendUrl = import.meta.env.VITE_BACKEND_URL + "/movies/";
  const { id } = useParams();

  const fetchApi = () => {
    axios
      .get(`${backendUrl}${id}`)
      .then((res) => {
        setMovie(res.data);
        setMovieReviews(res.data.reviews);
        setIsLoading(true);
      })
      .catch((err) => {
        "errore nella richiesta del dettaglio" + err;
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <h1 className="text-center my-3">Movie Detail</h1>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="col-6">
              <MovieCardForDetail Movie={movie} />{" "}
            </div>
            <div className="col-6">
              <ReviewCard Review={movieReviews} />{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
}
