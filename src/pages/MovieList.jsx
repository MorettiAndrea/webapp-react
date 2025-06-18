
import { useEffect,useState } from "react";
import axios from "axios";
import MoviesCard from "../compontents/dumb-components/Card";

const backEndport = 3000
const backEndUrl = `http://localhost:${backEndport}`

export default function MovieList() {
  const[movies , setMovies] = useState([])
  const[error , setError] = useState("")

  useEffect(()=> {axios.get(`${backEndUrl}/movies`)
.then(response =>setMovies(response.data.data))
.catch(err =>setError(err))},[])


if (error || !movies.length) return <p>Error during movies loading</p>

return (
    <div className="container">
      <h1>Movies list</h1>
      <div className="row">
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
 
















