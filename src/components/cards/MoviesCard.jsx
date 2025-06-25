import { Link } from "react-router-dom";

export default function MoviesCard({movie
}) {
  return (
    <>
   <div className="card">
          { movie.image && <img src={movie.image} className="card-img-top" alt={movie.title} /> }
            <div className="card-body text-center">
                <h3 className="card-title">{movie.title} ({movie.relase_year})</h3>
               {movie.director && <p className="card-text"><strong>{movie.director}</strong></p>}
               {movie.abstract && <p className="card-text">{movie.abstract}</p>}
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Movie details</Link> 
            </div>
        </div>
      
    </>
  );
}