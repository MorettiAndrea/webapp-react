


import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.director} />
            <p>{movie.abstract}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);}
 
















