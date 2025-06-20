import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import MovieDetailsCard from "../components/cards/MovieDetailsCard";


const backEndport = 3000;
const backEndUrl = `http://localhost:${backEndport}`;

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${backEndUrl}/movies/${id}`)
      .then((response) => {
        setMovie(response.data); 
      })
      .catch((err) => {setError(err)
      });
  }, []); 

  if (!movie) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <h3 className="mb-4 text-center">Dettagli film</h3>
        <MovieDetailsCard
          image={movie.image}
          title={movie.title}
          release_year={movie.relase_year}
          director={movie.director}
          abstract={movie.abstract}
          genre={movie.genre} 
          name={movie.name } 
          text={movie.text } 
          vote={movie.vote } 
          />
          </div>
    </div>
  );
}