import MoviesCard from "../cards/MoviesCard";
import { useState,useEffect } from "react";
import axios from "axios";
const backEndUrl =import.meta.env.VITE_BACKEND_URL
const backEndPort =import.meta.env.VITE_BACKEND_PORT+"/movies"

export default function MoviesCardsList() { 
    const[movies,setMovies] = useState([])
    const[error,SetError] = useState("")

    const FetchMovies = () => {axios.get(`${backEndUrl}${backEndPort}`).then((res)=>{setMovies(res.data.data);
    }).catch((err) =>{SetError(err)})}
    
    useEffect(FetchMovies,[])
    
    
    return( <div className="container">
    <div className="row">
    
        {movies.map((movie)=>(<div key={movie.id} className="col-4"> 
        <MoviesCard
        id={movie.id}
        title={movie.title}
        image={movie.image}
        director={movie.director}
        genre={movie.genre}
        relase_year={movie.relase_year}
        abstract={movie.abstract}
        ></MoviesCard>
        </div> ))}
    </div>
    </div>
   
 )}