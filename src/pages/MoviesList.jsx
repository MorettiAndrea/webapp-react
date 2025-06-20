
import { useEffect,useState } from "react";
import axios from "axios";
import MoviesCard from "../components/cards/MoviesCard";


const backEndport = 3000
const backEndUrl = `http://localhost:${backEndport}`

export default function MoviesList() {
  const[movies , setMovies] = useState([])
  const[error , setError] = useState("")

  useEffect(()=> {axios.get(`${backEndUrl}/movies`).then(response =>setMovies(response.data.data)).catch(err =>setError(err))},[])


if (error || !movies.length) return <p>Error during movies loading</p>

return (
    <div className="container">
      <div className="row">
      <h1 className="text-center">Movies list</h1>
        {movies.map((movie) => (   
          <MoviesCard
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          relase_year={movie.relase_year}
          director={movie.director}
          abstract={movie.abstract}
          />
        ))}
        </div>
      </div>
  );
}
 
















